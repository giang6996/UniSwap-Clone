import "./styles/ProductDetail.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Cart } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                if (!response.data) {
                    throw new Error('Product not found');
                }
                setSelectedProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        console.log(selectedProduct);
    }, [selectedProduct]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <div className="left">
                <img className="product-image" src={selectedProduct.image_url} alt={selectedProduct.title} />
            </div>
            <div className="px-5 right">
                <h1 className="product-title">{selectedProduct.title}</h1>
                <p className="product-description">{selectedProduct.description}</p>
                <h4 className="product-price">{`${selectedProduct.price} ETH`}</h4>
                <div className="button-group">
                    <Button className="btn btn-lg btn-secondary rounded-pill"><Cart /> Add to Cart</Button>
                    <Button className="btn btn-lg btn-primary rounded-pill">Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
