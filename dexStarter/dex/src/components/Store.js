import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ball1 from '../ball1.png';
import cover1 from'../cover-store-1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './styles/Store.css';
import "./styles/Carousel.css"


function StoreCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className='carouselItem'>
            <div className="card bg-dark">
              <img className='img-fluid card-img opacity-25' src={cover1} alt="cover1" />
            <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
                <h1 class="card-title">Card title</h1>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      <Carousel.Item>
        <div className='carouselItem'>
          <div className="card bg-dark">
            <img className='img-fluid card-img opacity-25' src={cover1} alt="cover1" />
            <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
              <h1 class="card-title">Card title</h1>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carouselItem'>
          <div className="card bg-dark">
            <img className='img-fluid card-img opacity-25' src={cover1} alt="cover1" />
            <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
              <h1 class="card-title">Card title</h1>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      </Carousel>
  );
}

function ProductCard({ id, image, description, title, author, price }) {
  return (
      <Link to={`/product/${id}`} className="product-link">
        <div className="card">
        <div className="img img-fluid">
            <img src={image} className="product-img" alt={title} />
          </div>
          <div className="desc py-1">{description}</div>
          <div className="title py-1">{title}</div>
        <div className="author py-1"><p>Made by <b>{author}</b></p></div>
          <div className="price py-1">{`${price} ETH`}</div>
        </div>
      </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function Store() {
  const products = [
    {
      id: 1,
      image: ball1,
      description: 'World 2023',
      title: "Messi's ball",
      author:  'Lionel Messi',
      price: 5,
    },
    {
      id: 2,
      image: ball1,
      description: 'Running Shoes',
      title: 'Nike Air Zoom',
      author: 'Lionel Messi',
      price: 8,
    },
    {
      id: 3,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      author: 'Lionel Messi',
      price: 12,
    },
    {
      id: 4,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      author: 'Lionel Messi',
      price: 12,
    },
    {
      id: 5,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort Lorem Ipsum  is simply dummy text of.',
      author: 'Lionel Messi',
      price: 12,
    },
    {
      id: 6,
      image: ball1,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      author: 'Lionel Messi',
      price: 12,
    },
    // Add more products as needed
  ];

  return (
    <div className="container-fluid">
      <div>
        <StoreCarousel></StoreCarousel>
      </div>
      <div className="container d-flex flex-column">
        <div className='products-header'>
          <h2>Top featured</h2>
        </div>
        <div className='d-flex flex-row justify-content-center'>
          <div className='bg-white rounded w-25'>

          </div>
          <div className="products w-75 d-flex flex-row flex-wrap justify-content-center"> 
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}



export default Store;
