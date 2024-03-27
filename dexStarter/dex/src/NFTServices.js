import axios from 'axios';

const nftApiUrl = 'http://localhost:3001/api/products'; // Replace with your API endpoint


const fetchNFTs = async () => {
    try {
        const response = await axios.get(nftApiUrl);
        const nfts = response.data;

        const ownedNFTs = nfts.filter((nft) => nft.availability == "1");

        nfts.forEach(element => {
            console.log(element);
        });

        return ownedNFTs;

    } catch (error) {
        console.error('Error fetching NFTs:', error);
        return []; // Handle errors gracefully, provide empty array or default values
    }
};

export { fetchNFTs };