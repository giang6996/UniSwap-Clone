import { ethers } from 'ethers';

async function getConnectedUserAddress() {
    // Check if MetaMask is installed
    if (!window.ethereum) {
        throw new Error('MetaMask not detected!');
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Request connection if not already connected
    try {
        const accounts = await provider.send('eth_requestAccounts');
        return accounts[0];
    } catch (error) {
        console.error('Error requesting accounts:', error);
        return null;
    }
}

export { getConnectedUserAddress };