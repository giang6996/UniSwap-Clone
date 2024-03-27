import { ethers } from 'ethers';
const NFT = require("./artifacts/contracts/Nft.sol/Nft.json"); //compiled file
const contractAddress = '0x3a0A2bfB25052E0486d4f454B2411dBdCC285d83'; // Replace with actual address

const getProvider = async () => {
    // Select appropriate provider based on your network (e.g., MetaMask, Alchemy)
    return new ethers.providers.Web3Provider(window.ethereum);
};

const getSigner = async (provider) => {
    return provider.getSigner();
};

const nftContract = async () => {
    const provider = await getProvider();
    const signer = await getSigner(provider);
    return new ethers.Contract(contractAddress, NFT.abi, signer);
};

export { nftContract };