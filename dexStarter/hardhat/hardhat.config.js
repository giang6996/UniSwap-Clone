require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "../dex/src/artifacts"
  },
  networks: {
    mygeth: {
      url: "http://192.168.22.104:8545",
      chainId: 9999,
        accounts: [
          "0x8636208ab670daddf9bc4f580e3f121d92a2ee158bc81c8942309b968042c79b",
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
