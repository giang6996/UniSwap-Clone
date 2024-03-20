import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios'; // Import axios for making HTTP requests
import cover1 from'../img/cover-store-1.jpg';
import cover2 from '../img/cover-store-2.jpg';
import cover3 from '../img/cover-store-3.jpg';
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

function ProductCard({ id, image_url, description, title, author, price }) {
  return (
    <Link to={`/product/${id}`} className="product-link px-4 col-lg-4 col-md-6 col-sm-12">
      <div className="card w-100 ">
        <div className="img img-fluid">
            <img src={image_url} className="product-img" alt={title} />
          </div>
          <div className="title py-1">{title}</div>
        <div className="author py-1"><p>Made by <b>{author}</b></p></div>
          <div className="price py-1">{`${price} ETH`}</div>
        </div>
      </Link>
  );
}



function Store() {

  ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [collectionFilterTerm, setCollectionFilterTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0); 
  const [maxPrice, setMaxPrice] = useState('');



  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      setProducts(response.data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);


  
  return (
    <div className="container-fluid">
      <div>
        <StoreCarousel />
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
                <input type="text" class="form-control rounded" placeholder="Search by title" value={searchTerm} onChange={(searchTerm) => setSearchTerm(event.target.value)} />
                </div>
              </div>
              <div className="py-4 px-2">
                <h5 className='text-dark text-start'>Collection</h5>
                <div class="input-group">
                <input type="text" class="form-control rounded" placeholder="Search by author" value={collectionFilterTerm}  onChange={(collectionFilterTerm) => setCollectionFilterTerm(event.target.value)}/>
                </div>
              </div>
              <div className="py-4 px-2">
                <h5 className='text-dark text-start'>Price range</h5>
                <div className='price-container'>
                  <div className='min-value numberVal'>
                  <p>Enter Minimum Price</p>
                  <input
                      type="number"
                      min="0"
                      max={maxPrice ? maxPrice : 10000}
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className='form-control rounded'
                    />
                  </div>
                  <br />
                  <div className='max-value numerVal'>
                  <p>Enter Maximum Price</p>
                  <input
                      type="number"
                      min={minPrice < 0 ? 0 : minPrice} // Ensure max value is not less than min value
                      max="10000"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className='form-control rounded'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="products d-flex flex-row col-lg-8 flex-wrap px-4 justify-content-center">
          {products
              .filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (collectionFilterTerm === '' || product.author.toLowerCase().includes(collectionFilterTerm.toLowerCase())) &&
                (maxPrice === '' || product.price <= maxPrice) &&
                product.price >= minPrice
              )
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;