// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// const MyNFTMarketplace = require("./contracts/Nft.sol");
// const Token = require("./contracts/Token.sol");
// const hre = require("hardhat");


const {ethers} = require('ethers');
const NFT = require("../dex/src/artifacts/contracts/Nft.sol/Nft.json"); //compiled file
const Token = require("../dex/src/artifacts/contracts/Token.sol/ComputerScienceToken.json"); //compiled file

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http://192.168.129.156:8545");
  const deployer = await provider.getSigner();

  console.log("Deploying contract with the account:", await deployer.getAddress());

  const factory = new ethers.ContractFactory(NFT.abi, NFT.bytecode, deployer);
  const contract = await factory.deploy();

  const tokenFactory = new ethers.ContractFactory(Token.abi, Token.bytecode, deployer);
  const deployedToken = await tokenFactory.deploy(await deployer.getAddress());

  console.log("ComputerScienceToken deployed to:", deployedToken.address);
  console.log("Contract deployed to:", contract.address);
  // console.log("Deployer info:", deployer);
  // console.log("Destination info:", contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
