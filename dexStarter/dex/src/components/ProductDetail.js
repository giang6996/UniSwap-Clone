import "./styles/ProductDetail.css";
import { Cart } from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import ball1 from '../ball1.png';
import { Link, useParams } from 'react-router-dom'; // Import Link from react-router-dom


function ProductDetail() {
    const { id } = useParams();

    // Ideally, fetch product data from a data source or API
    const products = [{
            id: '1',
            image: ball1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in porttitor libero. Sed nulla eros, venenatis nec diam sed, venenatis fringilla lorem. Etiam tincidunt sapien sed metus ultrices, in molestie justo blandit. Orci varius natoque penatibus et magnis dis parturient.',
            title: "Messi's ball",
            price: 5,
        },
        {
            id: '2',
            image: ball1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in porttitor libero. Sed nulla eros, venenatis nec diam sed, venenatis fringilla lorem. Etiam tincidunt sapien sed metus ultrices, in molestie justo blandit. Orci varius natoque penatibus et magnis dis parturient.',
            title: 'Nike Air Zoom',
            price: 8,
        },
        {
            id: '3',
            image: ball1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in porttitor libero. Sed nulla eros, venenatis nec diam sed, venenatis fringilla lorem. Etiam tincidunt sapien sed metus ultrices, in molestie justo blandit. Orci varius natoque penatibus et magnis dis parturient.',
            title: 'Cotton Comfort',
            price: 12,
        },];
    const selectedProduct = products.find((product) => product.id === id);

    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <div className="left">
                <img className="product-image" src={selectedProduct.image} alt={selectedProduct.title} />
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
            {/* Add additional details and Buttons as shown in the image */}
        </div>
    );
}

export default ProductDetail;