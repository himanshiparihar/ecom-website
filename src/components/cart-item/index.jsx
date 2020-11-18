import React from 'react';
import { connect } from 'react-redux';
import {updateCartItem, deleteCartItem} from '../../redux/cart/actions';

import close from '../../assets/cancel.svg';
import left from '../../assets/left-arrow.svg';
import right from '../../assets/right-arrow.svg';
import "./index.css";

const CartItem = ({ id, name, price, image, quantity, deleteCartItem, updateCartItem}) => {
    const handleDelete = () =>{
        deleteCartItem(id);
    }
    const handleUpdate = (quan) => {
        if(quan <  1)
            deleteCartItem(id);
        else
            updateCartItem({id, quan});
    }
    return (
        <div className="checkout-item-container">
            <img className="image-container" src={image} alt="Item"/>
            <p className="detail-container" style={{font:"24px Raleway"}}> {name} </p>
            <p className="detail-container">
                <img src={left} onClick={() => handleUpdate(Number(quantity)-1)}alt="decrement"/>
                <span>{quantity}</span>
                <img src={right} onClick={() => handleUpdate(Number(quantity)+1)} alt="increment"/>
            </p>
            <p className="detail-container" style={{font:"24px Raleway"}}>INR {price}</p>
            <p className="detail-container" ><img src={close} onClick={handleDelete} alt="cancle icon"></img></p>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
    updateCartItem: (details) => dispatch(updateCartItem(details)),
});

export default connect(null, mapDispatchToProps)(CartItem);