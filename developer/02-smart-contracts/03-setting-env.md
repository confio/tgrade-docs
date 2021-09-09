---
sidebar_position: 3
---

# Setting Up Environment

You need an environment to run contracts. You can either run your node locally or connect to an existing network. For
easy testing, testnet-2 network is online, you can use it to deploy and run your contracts.

- [https://rpc.testnet-2.tgrade.io](https://rpc.testnet-2.tgrade.io)
- [https://lcd.testnet-2.tgrade.io](https://lcd.testnet-2.tgrade.io)
- [https://faucet.testnet-2.tgrade.io](https://faucet.testnet-2.tgrade.io)

- Block Explorer: [https://testnet.tgrade.aneka.io](https://testnet.tgrade.aneka.io)

## Setup Go CLI {#setup-go-cli}

Let's configure `wasmd` exec, point it to testnets, create wallet and ask tokens from faucet:

First, source the testnet-2 network configurations to the shell:

```shell
source <(curl -sSL https://gist.githubusercontent.com/orkunkl/773e1798dc04ac7d06f468a778e90db6/raw/747290af38420138c1179ec3ce7d89f28e3accca/testnet-2_defaults.env)
```

Setup the client:

```shell
# add wallets for testing
wasmd keys add wallet
>
{
  "name": "wallet",
  "type": "local",
  "address": "tgrade13nt9rxj7v2ly096hm8qsyfjzg5pr7vn5saqd50",
  "pubkey": "tgradepub1addwnpepqf4n9afaefugnfztg7udk50duwr4n8p7pwcjlm9tuumtlux5vud6qvfgp9g",
  "mnemonic": "hobby bunker rotate piano satoshi planet network verify else market spring toward pledge turkey tip slim word jaguar congress thumb flag project chalk inspire"
}

wasmd keys add wallet2
```

You need some tokens in your address to interact. 
Requesting tokens from faucet:

```shell
JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) '{"denom":"utgd","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.testnet-2.tgrade.io/credit
JSON=$(jq -n --arg addr $(wasmd keys show -a wallet2) '{"denom":"utgd","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.testnet-2.tgrade.io/credit
```

## Export wasmd Parameters {#export-wasmd-parameters}

Export wasmd variables for setting up node endpoint and transaction configuration:

```bash
# bash
export NODE="--node $RPC"
export TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.001utgd --gas auto --gas-adjustment 1.3"

# zsh
export NODE=(--node $RPC)
export TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001utgd --gas auto --gas-adjustment 1.3)
```

If command above throws error, this means your shell is different. If no errors, try running this:

```bash
wasmd query bank total $NODE
```
