import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectError, selectLoading} from '../../redux/cart/selectors';
import {fetchCartItems} from '../../redux/cart/actions';

import EmptyCart from '../../components/empty-cart';
import Toast from '../../components/toast';
import Errors from '../../error';
import CartItem from "../../components/cart-item";
import Loader from "../../components/loader";

import './index.css';

const Cart=({cart, error, fetchCartItems, loading})=>{
    let currentUser = JSON.parse(localStorage.currentUser);
    const [list, setList] = useState([]);
    let [total, setTotal] = useState(0);
    useEffect(() => {
        let currentUser = JSON.parse(localStorage.currentUser)
        fetchCartItems(currentUser.id);
    }, [fetchCartItems]);
    
    useEffect(() => {
        setList([Errors[500]]);
    }, [error]);

    useEffect(() => {
        if(cart){
            let tot =0;
            cart.forEach(cartItem => {
                tot += Number(cartItem.item.price) * Number(cartItem.quantity);
            })
            setTotal(tot)
        }
    }, [cart])
    return(
        <React.Fragment>
            <Loader isLoading={loading}/>
            {error? <Toast toastList={list}/> : null}
            {cart && cart.length > 0 ?
                <div className="checkout-page-container">
                    <p className="text" style={{font:"Bold Italic 51px Raleway"}}>Shopping Cart</p>
                    <div className="checkout-header-container">
                        <p className="header-block" style={{font:"24px Raleway"}}>Product</p>
                        <p className="header-block" style={{font:"24px Raleway"}}>Name</p>
                        <p className="header-block" style={{font:"24px Raleway"}}>Quantity</p>
                        <p className="header-block" style={{font:"24px Raleway"}}>Price</p>
                        <p className="header-block" style={{font:"24px Raleway"}}>Remove</p>
                    </div>
                    {console.log(cart)}
                    {
                    cart.map((val,index)=>(
                            <CartItem
                                key={index+1}
                                id= {val.id}
                                name={val.item.title}
                                price={val.item.price}
                                image={val.item.image1}
                                quantity={val.quantity}
                            />      
                        )
                    )}
                    <p className="text total" style={{font:"36px Raleway"}}>Total: INR {total}</p>
                    <a href={`/${currentUser.id}/placeorder`} className="checkout" style={{ width:"15em"}} >Place Order</a>
                </div>
             :
                <EmptyCart />
            }
            
            
     </React.Fragment>
    );
}
const mapStateToProps = createStructuredSelector({
    cart: selectCartItems,
    error: selectError,
    loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchCartItems: (id) => dispatch(fetchCartItems(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);