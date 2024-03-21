const { ethers } = require("ethers");
const NFT = require("../dex/src/artifacts/contracts/Nft.sol/Nft.json"); //compiled file

// Replace with your deployed contract address
const CONTRACT_ADDRESS = "0x81B0962E68239DE8d4Bd6f99a7470E814282b68d";

async function checkNFT(tokenId) {
    // Get a provider for your private network
    const provider = new ethers.providers.JsonRpcProvider("http://192.168.22.104:8545"); // Replace if needed

    // Create a contract instance using the ABI
    const contract = new ethers.Contract(CONTRACT_ADDRESS, NFT.abi, provider);

    // Call the `ownerOf` function to check ownership
    try {
        const owner = await contract.ownerOf(tokenId);
        console.log(`NFT with ID ${tokenId} is owned by: ${owner}`);
    } catch (error) {
        if (error.message.includes("ERC721: owner query for nonexistent token")) {
            console.error(`NFT with ID ${tokenId} does not exist on the blockchain.`);
        } else {
            console.error("Error checking NFT ownership:", error);
        }
    }
}

// Replace with the specific token ID you want to check
const tokenIdToCheck = 5; // Adjust the ID

checkNFT(tokenIdToCheck);