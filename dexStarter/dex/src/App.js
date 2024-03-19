import "./App.css";
import Header from "./components/Header.js";
import React, {useState} from 'react';
import {ethers} from 'ethers';
import MyNFTMarketplace from "./artifacts/contracts/Nft.sol/MyNFTMarketplace.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contractAddress = '0xB3D2A1a4C920c1a92E5935B02badbE52c548b977';

import Home from "./components/Home.js";
import Store from "./components/Store.js";
import CarouselHead from "./components/CarouselHead.js"
import Cart from "./components/Cart.js";
import ProductDetail from "./components/ProductDetail.js";
import Profile from "./components/Profile.js"
import LogRes from "./components/LogRes.js"
import Footer from "./components/Footer.js";
import {Routes, Route} from "react-router-dom";



function App() {

  return (
  <div className="App">
    <Header />
    {/* define route for each function using router-dom */}
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path="/store" element={<Store />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LogRes />} />
      <Route path="/carousel" element={<CarouselHead />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>

    <Footer />
  </div>
  );
}

export default App;
