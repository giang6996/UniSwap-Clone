import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ball1 from '../ball1.png';
import shoeImage from '../shoe.png';
import shirtImage from '../shirt.png';

function ProductCard({ id, image, description, title, price }) {
  return (
    <div className="card">
      <Link to={`/product/${id}`} className="product-link">
        <div className="img">
          <img src={image} className="product-img" alt={title} />
        </div>
        <div className="desc">{description}</div>
        <div className="title">{title}</div>
        <div className="box">
          <div className="price">{`${price} ETH`}</div>
          {/* Removed onClick since we're using Link for navigation */}
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function ProductDetail({ match }) {
  // Assuming you have a product data source
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
      image: shoeImage,
      description: 'Running Shoes',
      title: 'Nike Air Zoom',
      price: 8,
    },
    {
      id: 3,
      image: shirtImage,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      price: 12,
    },
    // Add more products as needed
  ];

  const productId = parseInt(match.params.id, 10);
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.title}</h2>
      <img src={selectedProduct.image} alt={selectedProduct.title} />
      <p>{selectedProduct.description}</p>
      <p>{`${selectedProduct.price} ETH`}</p>
      {/* Add more details as needed */}
    </div>
  );
}

ProductDetail.propTypes = {
  match: PropTypes.object.isRequired,
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
      image: shoeImage,
      description: 'Running Shoes',
      title: 'Nike Air Zoom',
      price: 8,
    },
    {
      id: 3,
      image: shirtImage,
      description: 'Casual Shirt',
      title: 'Cotton Comfort',
      price: 12,
    },
    // Add more products as needed
  ];

  return (
    <div className="store1">
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
