import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ball1 from '../ball1.png';
import shoeImage from '../shoe.png';
import shirtImage from '../shirt.png';
import './styles/Store.css';


function ProductCard({ id, image, description, title, price }) {
  return (
      <Link to={`/product/${id}`} className="product-link">
        <div className="card">
          <div className="img">
            <img src={image} className="product-img" alt={title} />
          </div>
          <div className="desc">{description}</div>
          <div className="title">{title}</div>
          <div className="box">
            <div className="price">{`${price} ETH`}</div>
            {/* Removed onClick since we're using Link for navigation */}
          </div>
        </div>
      </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function Store() {
  const products = [
    {
      id: 1,
      image: ball1,
      description: 'World 2023',
      title: "Messi's ball",
      price: 5,
    },
    {
      id: 2,
      image: ball1,
      description: 'Running Shoes',
      title: 'Nike Air Zoom',
      price: 8,
    },
    {
      id: 3,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      price: 12,
    },
    {
      id: 4,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      price: 12,
    },
    {
      id: 5,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort Lorem Ipsum  is simply dummy text of.',
      price: 12,
    },
    {
      id: 6,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      price: 12,
    },
    // Add more products as needed
  ];

  return (
    <div className="container">
      <section className="item-display-sec">
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}



export default Store;
