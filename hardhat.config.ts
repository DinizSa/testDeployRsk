import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { HDWALLET_MNEMONIC: mnemonic } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    testnet: {
      chainId: 31,
      url: "https://public-node.testnet.rsk.co",
      accounts: {mnemonic},
    },
    mainnet: {
      url: "https://public-node.rsk.co",
      accounts: [
        "fa35b7470009bc49eeaf095d6cf59fd9fb55530bb28878900f8a9ba02bddf76a",
        "219b3e5643042bf971c54373af476e37cc6cc3a85e7f8c0d1b6f4eed599b9e1b",
        "24da02ff3c8f2d79d8becca2bd738543f2103c5e75903a01b11756962d840606",
      ],
      chainId: 30,
    },
  },
};

export default config;
