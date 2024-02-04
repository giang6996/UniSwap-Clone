import React, { useState, useEffect } from 'react';
import './styles/Cart.css';
import ball1 from '../ball1.png';
import Logo from '../Logo.png';
import './styles/Cart.css';
import { Link, useLocation } from 'react-router-dom';

// Cart page, displaying choosen product ready to purchase
// For demonstration, the page will only include HTML, and no actual API calls or
// database interaction have been implemented with a total price and the possibility of removing products or emptying the cart
// In a real application you would need to connect this component with your backend server and database

function Cart() {
    return(
    // button to return to Store page
    <div>
        <div id="back-arrow">
        <i id="arrow-left"></i>
        <a href="Store.js">Go back to shopping</a>
    </div>

    <div id="cart">
    {/* List of example item in Cart */}
        <p id="cart-title">Your cart</p>

        <div class="product-and-total">
            <div class="product">
                <img src={ball1} alt="messi ball"/>
                <div id="product-name">
                    <p>Messi ball</p>
                </div>
                <div id="quantity">
                    <span id="minus">-</span>
                    <span id="num">01</span>
                    <span id="plus">+</span>
                </div>
                <p id="price">5 ETH</p>
                <span id="delete" onclick="delete_item()"><i class="material-icons">&#xe872;</i></span>
            </div>


            <div class="product">
                <img src={ball1} alt="messi ball"/>
                <div id="product-name">
                    <p>Ronaldo ball</p>
                </div>
                <div id="quantity">
                    <span id="minus">-</span>
                    <span id="num">01</span>
                    <span id="plus">+</span>
                </div>
                <p id="price">5 ETH</p>
                <span id="delete" onclick="delete_item()"><i class="material-icons">&#xe872;</i></span>
            </div>

            <div class="product">
                <img src={ball1} alt="messi ball"/>
                <div id="product-name">
                    <p>Neymar ball</p>
                </div>
                <div id="quantity">
                    <span id="minus">-</span>
                    <span id="num">01</span>
                    <span id="plus">+</span>
                </div>
                <p id="price">5 ETH</p>
                <span id="delete"><i class="material-icons">&#xe872;</i></span>
            </div>


            <div id="total-div">
                <p>Subtotal</p>
                <p id="total">15 ETH</p>
            </div>
        </div>
        
        {/* Detail wallet infomation, so user can check balance before engage purchases */}
        <div id="detail">
            <p>Details</p>
            <div class="wallet">
                <p id="wallet-title">Wallet</p>
                <div id="remaining">
                    <p>Remain: 100ETH</p>
                </div>
                <hr/>
                <p id="username">Your Name</p>
                <img src={Logo} alt="jebdevlogo"/>
            </div>
            <div class="fullname-block">
                <p id="fullname-title">Fullname</p>
                <p id="your-fullname">Your Name</p>
            </div>
            <div class="fullname-block">
                <p id="fullname-title">Address</p>
                <p id="your-fullname">fsadhfsadhfsauifghsiaugiu</p>
            </div>
            <div id="buynow-button">
                <p><button>Buy Now</button></p>
            </div>
        </div>

        </div>
    </div>
    );
}

export default Cart;
