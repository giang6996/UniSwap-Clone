import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cover1 from '../img/cover-store-1.jpg';
import carousel2img from '../img/carousel2img.jpg';
import carousel3img from '../img/carousel3img.jpg';
import home1 from '../img/home1.jpg';
import home2 from '../img/home2.png';
import './styles/Carousel.css';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
  <div>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false}>
      <Carousel.Item>
        <div className='carouselItem'>
          <div className="card bg-dark">
            <img
              className='img-fluid card-img opacity-25 carousel-img'
              src={cover1}
              alt="cover1"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center text-white">
              <h1 className="card-title">Love Football?!</h1>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carouselItem'>
          <div className="card bg-dark">
            <img
              className='img-fluid card-img opacity-25 carousel-img'
              src={carousel2img}
              alt="carousel2img"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center text-white">
              <h1 className="card-title">These NFTs are for You!!</h1>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='carouselItem'>
          <div className="card bg-dark">
            <img
              className='img-fluid card-img opacity-25 carousel-img' src={carousel3img} alt="carousel3img" />
            <div className="card-img-overlay d-flex flex-column justify-content-center text-white">
              <h1 className="card-title">Own the Game, Collect the Moments – Exclusive Football NFTs Await You!</h1>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>

    <div className="mid">
        <div>
            <img className="img-container" src={home1} width="240px" height="300px"/>
            <h2>Manage Your Inventory</h2>
        </div>
        <div>
            <img className="img-container" src={home2} width="240px" height="300px"/>
            <h2 className="buy-nft">Buy the NFT of your favourite moment</h2>
        </div>
    </div>
    </div>
  );
}

export default Home;
