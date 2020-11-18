import React from 'react';
import "./index.css"

function EmptyOrders() {
    return (
        <React.Fragment>
            <div class="error-card">
                <div class="error-primaryMessage">
                    No Active Orders
                    <div class="error-secondaryMessage">
                        there is no recent orders to show
                    </div>
                    <div className="error-errorImage"></div>
                    <a  href="/">
                    <button>Shop now</button>
                    </a>
                    <div class></div>
                </div>
            </div>
        </React.Fragment>
    )}

export default EmptyOrders;