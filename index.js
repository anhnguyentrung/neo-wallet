const { default: Neon, api, wallet } = require("@cityofzion/neon-js")
const toAddress = 'ALq7AWrhAueN6mJNqk6FHJjnsEoPRytLdW'
const network = "TestNet"
//1. create account
const privateKey = "9ab7e154840daca3a2efadaf0df93cd3a5b51768c632f5433f86909d9b994a69"
const account = new wallet.Account(privateKey)
//2. make intent
const intent = api.makeIntent({ NEO: 1, GAS: 0.00000001 }, toAddress)
console.log("\n\n--- Intents ---")
intent.forEach(i => console.log(i))
//3. get api provider
const apiProvider = new api.neoscan.instance(network)
console.log("\n\n--- API Provider ---")
console.log(apiProvider)
//4. send asset
const config = {
  api: apiProvider,
  account: account,
  intents: intent
}
Neon.sendAsset(config)
  .then(config => {
    console.log("\n\n--- Response ---")
    console.log(config.response)
  })
  .catch(config => {
    console.log(config)
  })

