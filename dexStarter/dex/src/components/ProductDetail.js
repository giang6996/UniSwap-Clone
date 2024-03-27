import "./styles/ProductDetail.css";
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Cart } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { nftContract } from '../Contract';
import { fetchNFTs } from '../NFTServices';

function ProductDetail() {

    const NFT = require("../artifacts/contracts/Nft.sol/Nft.json"); //compiled file
    // const mysql = require("mysql2"); // Assuming you use mysql2
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get(`http://localhost:3001/api/products/${id}`);

                // Fetch contract data using fetchNFTs
                const contractData = await fetchNFTs();
                const owner = contractData.find((nft) => nft.id === id)?.owner; // Adjust logic based on your data structure
                // Fetch any other contract data as needed

                setSelectedProduct({
                    ...response.data,
                    owner,
                });
            } catch (error) {
                console.error('Error fetching product:', error);
                setError(error.message || 'An error occurred.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleBuyNFT = async () => {
        if (!selectedProduct) return;

        try {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const userAccount = accounts[0];

            const contractAddress = "0x3a0A2bfB25052E0486d4f454B2411dBdCC285d83";


            const contract = new web3.eth.Contract(NFT.abi, contractAddress); // Use fake account for interaction

            // Replace with appropriate price retrieval logic (consider database or contract data)
            const price = parseInt(selectedProduct.price) * 10 ** 18; // Assuming price is stored in wei

            console.log(price);

            await contract.methods.buyNFT(id).send({ from: userAccount, value: price, gasPrice: '100' });

            const response = await axios.post('http://localhost:3002/update-nft-availability', { id });
            if (response.data.success) {
                console.log('NFT purchase successful!');
                navigate('/store');
            } else {
                console.error('Error updating database:', response.data.error);
                setError('Failed to update database. Please try again.');
            }

            console.log('NFT purchase successful!');
            navigate('/store');

        } catch (error) {
            console.error('Error buying NFT:', error);
            setError('Failed to purchase NFT. Please check your account and try again.');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
                <Button onClick={() => navigate('/store')}>Go back to Store</Button>
            </div>
        );
    }

    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <div className="left">
                <img className="product-image" src={selectedProduct.image_url} alt={selectedProduct.title} />
            </div>
            <div className="right">
                <h1 className="product-title">{selectedProduct.title}</h1>
                <p className="product-description">{selectedProduct.description}</p>
                <h4 className="product-price">{`${selectedProduct.price} MYN`}</h4>
                <div className="button-group">
                    <Button className="btn btn-lg btn-secondary rounded-pill"><Cart /> Add to Cart</Button>
                    <Button className="btn btn-lg btn-primary rounded-pill" onClick={handleBuyNFT}>Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;