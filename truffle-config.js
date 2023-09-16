require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const API_KEY = process.env.API_KEY;

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: API_KEY,
  },
  networks: {
    bsctest: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
        }),
      skipDryRun: true,
      network_id: "97", // Match any network id
      // websockets: true,
      // gas: 5000000
    },
  },
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
