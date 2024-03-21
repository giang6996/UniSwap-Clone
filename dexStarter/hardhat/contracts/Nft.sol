// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Nft is ERC721 {
    uint256 private _tokenIdCounter;
    mapping(uint256 => address) public tokenIdToOwner; // Track NFT owner by token ID

    constructor() ERC721("MyNFT", "MNFT") {}

    function mintNFT() public {
        _tokenIdCounter++; // Use built-in increment
        uint256 tokenId = _tokenIdCounter;
        _safeMint(msg.sender, tokenId);
        tokenIdToOwner[tokenId] = msg.sender;
    }

    function transferNFT(address to, uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "You don't own this NFT");
        _transfer(msg.sender, to, tokenId);
        tokenIdToOwner[tokenId] = to;
    }

    // Function for user to list NFT for sale (implement pricing mechanism and escrow if needed)
    function listNFTForSale(uint256 tokenId, uint256 price) public {
        require(ownerOf(tokenId) == msg.sender, "You don't own this NFT");
        // Implement listing logic (e.g., store price in a mapping)
    }

    // Function for user to buy a listed NFT (implement payment logic and transfer)
    function buyNFT(uint256 tokenId) public payable {
        address seller = tokenIdToOwner[tokenId];
        require(seller != address(0), "NFT does not exist");
        require(seller != msg.sender, "You can't buy your own NFT");
        // Implement payment logic (e.g., check price and transfer funds to seller)
        _transfer(seller, msg.sender, tokenId);
        tokenIdToOwner[tokenId] = msg.sender;
    }

}