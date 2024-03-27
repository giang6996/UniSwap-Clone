const express = require('express');
const cors = require('cors'); // Import CORS middleware
const { ethers } = require("ethers");
const mysql = require("mysql2/promise"); // Assuming you use mysql2
const NFT = require("../dex/src/artifacts/contracts/Nft.sol/Nft.json"); // Compiled contract

const app = express(); // Initialize Express app
const port = 3002;

app.use(cors());
app.use(express.json()); // Parse incoming request bodies

const CONTRACT_ADDRESS = "0x3a0A2bfB25052E0486d4f454B2411dBdCC285d83";
// Replace with your actual database credentials
const MYSQL_HOST = "feenix-mariadb.swin.edu.au";
const MYSQL_USER = "s104212294";
const MYSQL_PASSWORD = "271104";
const MYSQL_DATABASE = "s104212294_db";
const provider = new ethers.providers.JsonRpcProvider("http://192.168.129.156:8545");

async function buyNFT(tokenId, signer, price) {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, NFT.abi, signer);
    try {
        const tx = await contract.buyNFT(tokenId, { value: price });
        const receipt = await tx.wait();

        if (receipt.status === 1) { // Check transaction success
            console.log("NFT purchased successfully!");

            const connection = await mysql.createConnection({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE,
            });

            await connection.execute("UPDATE assets SET availability = 0 WHERE id = ?", [tokenId]);
            await connection.end();

            console.log("Availability updated for NFT", tokenId);
        } else {
            console.error("Transaction failed:", receipt);
            throw new Error("Transaction failed"); // Re-throw for error handling
        }
    } catch (error) {
        console.error("Error buying NFT:", error);
        throw error; // Re-throw for error handling
    }
}

// API endpoint for buying NFT
app.post('/api/buy-nft', async (req, res) => {
    const { tokenId, userAccount, price } = req.body;

    try {
        const signer = new ethers.Wallet(userAccount.privateKey, provider);
        const response = await buyNFT(tokenId, signer, price);
        res.json({ success: true });
    } catch (error) {
        console.error("Error handling buyNFT request:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});