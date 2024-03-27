const { ethers } = require("ethers");
const mysql = require("mysql2/promise"); // Assuming you use mysql2
const NFT = require("../dex/src/artifacts/contracts/Nft.sol/Nft.json"); //compiled file

// Replace with your actual database connection details
const MYSQL_HOST = "feenix-mariadb.swin.edu.au";
const MYSQL_USER = "s104212294";
const MYSQL_PASSWORD = "271104";
const MYSQL_DATABASE = "s104212294_db";

// Replace with your deployed contract address
const CONTRACT_ADDRESS = "0x3a0A2bfB25052E0486d4f454B2411dBdCC285d83";

async function migrateNFTs() {
    // Connect to MySQL database
    const connection = await mysql.createConnection({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
    });

    // Fetch all NFTs from the database (replace with your query)
    const [nfts] = await connection.execute("SELECT * FROM assets");

    // Get a signer from your private network (replace with your provider)
    const provider = new ethers.providers.JsonRpcProvider("http://192.168.129.156:8545"); // Remember to replace
    const deployer = await provider.getSigner();

    // Connect the contract using the signer and ABI
    const contract = new ethers.Contract(CONTRACT_ADDRESS, NFT.abi, deployer);

    for (const nft of nfts) {

        const tokenId = nft.id;
        const owner = nft.author;
        const title = nft.title;
        const price = nft.price;
        const availability = nft.availability;

        const priceParts = price.split('.');
        const integerPart = priceParts[0];
        const decimalPart = priceParts[1].padEnd(2, '0'); // Ensure 2 decimal places (adjust if needed)

        // Convert integer part to a BigNumber
        const integerPartBN = ethers.BigNumber.from(integerPart);

        // Convert decimal part to wei (assuming 2 decimal places)
        const decimalPartWei = ethers.utils.parseUnits(decimalPart, 'gwei'); // Use 'gwei' for 9 decimal places

        // Combine integer and decimal parts into total price in wei
        const priceWei = integerPartBN.add(decimalPartWei);

        try {
            // Mint the NFT on the blockchain
            const tx = await contract.mintNFT({ gasLimit: 500000 }); // Adjust gas limit as needed
            await tx.wait();
            console.log(`NFT minted with ID: ${tokenId}, title: ${title} and owner: ${owner}`);
            await contract.listNFTForSale(tokenId, priceWei, { gasLimit: 500000 }); // Adjust gas limit as needed
            console.log(`Listed NFT ${tokenId} for sale at price: ${price}`);
            console.log(`avability: ${availability}`)
        } catch (error) {
            console.error(`Error minting NFT ${tokenId}:`, error);
        }
    }

    // Close the database connection
    await connection.end();
}



exports.migrateNFTs = migrateNFTs;
