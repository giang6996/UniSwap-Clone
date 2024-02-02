import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ball1 from '../ball1.png';

import cover1 from'../cover-store-1.jpg';
import cover2 from '../cover-store-2.jpg';
import cover3 from '../cover-store-3.jpg';
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
            <img className='img-fluid card-img opacity-25' src={cover2} alt="cover1" />
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
            <img className='img-fluid card-img opacity-25' src={cover3} alt="cover1" />
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
    <Link to={`/product/${id}`} className="product-link px-4 col-lg-4 col-md-6 col-sm-12">
      <div className="card w-100 ">
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
        <div className='d-flex flex-lg-row flex-md-column flex-sm-column justify-content-between'>
          <div className='bg-white rounded col-lg-4 py-4 px-2'>
            <div className="py-4 px-2">
              <h2 className='text-dark'>Result Filter</h2>
            </div>
            <form action="#">
              <div className='py-4 px-2'>
                <h5 className='text-dark text-start'>Search</h5>
                <div class="input-group">
                  <input type="text" class="form-control rounded" placeholder="Search here" />
                </div>
              </div>
              <div className="py-4 px-2">
                <h5 className='text-dark text-start'>Category</h5>
                <select class="form-select">
                  <option selected disabled>--Select categories here--</option>
                  <option value="1">Category One</option>
                  <option value="2">Category Two</option>
                  <option value="3">Category Three</option>
                </select>
              </div>
              <div className="py-4 px-2">
                <h5 className='text-dark text-start'>Collection</h5>
                <select class="form-select">
                  <option selected disabled>--Select collections here--</option>
                  <option value="1">Collection One</option>
                  <option value="2">Collection Two</option>
                  <option value="3">Collection Three</option>
                </select>
              </div>
              <div className="py-4 px-2">
                <h5 className='text-dark text-start'>Order</h5>
                <select class="form-select">
                  <option value="1" selected>Ascending</option>
                  <option value="2">Descending</option>
                </select>
              </div>
              <div className="py-4 px-2">
                <h5 className='text-dark text-start'>Price range</h5>
                <label for="customRange2" class="form-label">Example range</label>
                <input type="range" class="form-range" min="0" max="5" id="customRange2" />
              </div>
              <div className="py-4 px-2">
                <button className='btn btn-primary' type="submit">Filter Results</button>
              </div>
            </form>
          </div>
          <div className="products d-flex flex-row col-lg-8 flex-wrap justify-content-center">
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
