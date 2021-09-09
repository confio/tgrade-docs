---
sidebar_position: 5
---

# Uploading and Interacting

We have the binary ready. Now it is time to see some wasm action.

## Go CLI {#go-cli}

We generated a wasm binary executable in the previous chapter. Let's put it into use. Now, we will upload the code to
the blockchain. Afterwards, you can download the bytecode to verify it is proper:

```shell
# see how many codes we have now
wasmd query wasm list-code $NODE

# gas is huge due to wasm size... but auto-zipping reduced this from 1.8M to around 600k
# you can see the code in the result
RES=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from wallet $TXFLAG -y)

# you can also get the code this way
CODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')

# no contracts yet, this should return an empty list
wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json

# you can also download the wasm from the chain and check that the diff between them is empty
wasmd query wasm code $CODE_ID $NODE download.wasm
diff artifacts/cw_nameservice.wasm download.wasm
```

### Instantiating the Contract {#instantiating-the-contract}

We can now create an instance of this wasm contract. We instantiate smart contract with defined purchase and transfer price.

```shell
# instantiate contract and verify
INIT='{"purchase_price":{"amount":"100","denom":"utgd"},"transfer_price":{"amount":"999","denom":"utgd"}}'
wasmd tx wasm instantiate $CODE_ID "$INIT" \
    --from wallet --label "awesome name service" $TXFLAG -y

# check the contract state (and account balance)
wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json
CONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')
echo $CONTRACT

wasmd query wasm contract $CONTRACT $NODE --output json

# you can dump entire contract state
wasmd query wasm contract-state all $CONTRACT $NODE --output json

# Note that keys are hex encoded, and val is base64 encoded.
# To view the returned data (assuming it is ascii), try something like:
# (Note that in many cases the binary data returned is non in ascii format, thus the encoding)
wasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r '.models[0].key' | xxd -r -ps
wasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r '.models[0].value' | base64 -d

# or try a "smart query", executing against the contract
wasmd query wasm contract-state smart $CONTRACT '{}' $NODE
# (since we didn't implement any valid QueryMsg, we just get a parse error back)
```

Once contract instantiated, let's register a name and transfer it with paying its price.

```shell
# execute fails if wrong person
REGISTER='{"register":{"name":"freddy"}}'
wasmd tx wasm execute $CONTRACT "$REGISTER" \
    --amount 100utgd \
    --from wallet $TXFLAG -y

# query name record
NAME_QUERY='{"resolve_record": {"name": "freddy"}}'
wasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json
# {"data":{"address":"tgrade1av9uhya7ltnusvunyqay3xcv9x0nyc872cheu5"}}

# buy and transfer name record to wallet2
TRANSFER='{"transfer":{"name":"freddy", "to": "tgrade149mvf8wrumxz45lg3tdpgylwxrpw7gyav58cu6"}}'
wasmd tx wasm execute $CONTRACT "$TRANSFER" \
    --amount 999utgd \
    --from wallet $TXFLAG -y
```

Query record to see the new owner address:
```shell
NAME_QUERY='{"resolve_record": {"name": "freddy"}}'
wasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json
# {"data":{"address":"tgrade149mvf8wrumxz45lg3tdpgylwxrpw7gyav58cu6"}}
```
