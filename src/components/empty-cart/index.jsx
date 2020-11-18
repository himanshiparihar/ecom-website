import React from 'react';
import "./index.css"

function EmptyCart() {
    return (
        <React.Fragment>
            <div className="empty-cart-container">
                <div class="empty-cart-card">
                    <div class="empty-cart-primaryMessage">
                        Your Cart is Empty
                        <div class="empty-cart-secondaryMessage">
                            there are no items in your cart
                        </div>
                        <div className="empty-cart-errorImage"></div>
                        <a  href="/">
                        <button>Shop now</button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )}

export default EmptyCart;