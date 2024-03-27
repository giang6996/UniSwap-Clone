require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "../dex/src/artifacts"
  },
  networks: {
    mygeth: {
      url: "http://192.168.129.156:8545",
      chainId: 9999,
        accounts: [
          "0x82a2c4c4eeb00f1f01c064b630cfd0d079b24051fcdceaf6d04b9bd3a7087cb3", //Default accounts to deploy contract
        ]
    }
  },
  solidity: "0.8.24",
};

task("migrate-nfts", "Migrate NFTs from database to blockchain")
  .setAction(async () => {
    const migrationScript = require("./migratenfts.js");
    await migrationScript.migrateNFTs();
  });
