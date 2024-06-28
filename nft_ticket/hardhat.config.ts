import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox"
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    base_sepolia: {
      url: `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY ?? ""}`,
      accounts: [process.env.PRIVATE_KEY ?? ""]
    }
  }
};

export default config;
