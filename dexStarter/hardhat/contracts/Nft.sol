// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Nft is ERC721 {
    uint256 private _tokenIdCounter;
    mapping(uint256 => address) public tokenIdToOwner; // Track NFT owner by token ID
    mapping(uint256 => uint256) public tokenIdToPrice; // Track NFT price in wei by token ID

    constructor() ERC721("MyNFT", "MNFT") {}

    // Event for signaling NFT sale
    event NFTSold(uint256 tokenId);

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
        require(price > 0, "Listing price must be greater than zero"); // Enforce minimum price

        // Update mapping to store the listing price for the NFT
        tokenIdToPrice[tokenId] = price;
    }

    // Function for user to buy a listed NFT (implement payment logic and transfer)
    function buyNFT(uint256 tokenId) public payable {
        address seller = tokenIdToOwner[tokenId];
        require(seller != address(0), "NFT does not exist");
        require(seller != msg.sender, "You can't buy your own NFT");

        uint256 price = tokenIdToPrice[tokenId]; // Replace with appropriate price retrieval logic
        require(price > 0, "NFT is not listed for sale");

        // 3. Check if buyer sent enough funds
        require(msg.value >= price, "Insufficient funds sent");

        // 4. Transfer funds from buyer to seller
        payable(seller).transfer(price);

        // 5. Transfer NFT ownership
        _transfer(seller, msg.sender, tokenId);
        tokenIdToOwner[tokenId] = msg.sender;
    }

}