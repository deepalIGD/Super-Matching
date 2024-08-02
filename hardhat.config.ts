import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks:{
    cdk: {
      url: 'https://rpc-nonprod.instodefi.com',
      accounts: ['f89e2540e10bafb70fb88b9829c5df89f66d8ed5b7fe5258a0b0bcfeba5a7000'],
      timeout: 12000000,
    }
  }
};

export default config;
