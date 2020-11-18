import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectLoading, selectError} from '../../redux/cart/selectors';
import {fetchCartItems, clearCart} from '../../redux/cart/actions';
import {createOrderStart} from '../../redux/order/actions';

import Loader from "../../components/loader";
import Toast from '../../components/toast';
import Errors from '../../error';

import './index.css';

function PlaceOrder ({cart, fetchCartItems, error, loading, createOrderStart, clearCart}) {
    let [total, setTotal] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        let currentUser = JSON.parse(localStorage.currentUser);
        fetchCartItems(currentUser.id);
    }, [fetchCartItems]);
    useEffect(() => {
        if(cart){
            let tot =0;
            cart.forEach(cartItem => {
                tot += Number(cartItem.item.price) * Number(cartItem.quantity);
            })
            setTotal(tot)
        }
    }, [cart]);
    useEffect(() => {
        setList([Errors[401]])
    }, [error]);

    const handleCreateOrder = async (e) => {
        await e.preventDefault();
        let currentUser = JSON.parse(localStorage.currentUser);
        createOrderStart({userId: currentUser.id, items: cart})
        clearCart(currentUser.id)
    }
    return (
    <div className="container-fluid">
        <Loader isLoading={loading}/>
        {error? <Toast toastList={list}/> : null}
        <div className="row">
            <aside className="col-lg-9">
                <div className="card">
                    <div className="table-responsive">
                        <table className="table table-borderless table-shopping-cart">
                            <thead className="text-muted">
                                <tr className="small text-uppercase">
                                    <th scope="col" width="300">Product</th>
                                    <th scope="col" width="200">Quantity</th>
                                    <th scope="col" width="200">Price</th>
                                    <th scope="col" width="550">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart && cart.length > 0 ? 
                                cart.map((val,index)=>(
                                    <tr>
                                        <td>
                                            <figure className="itemside align-items-center">
                                                <div className="aside"><img src={val.item.image1} className="img-sm" alt="Item"/></div>
                                                    <figcaption className="info"> <span href="#" className="title text-dark" data-abc="true">{val.title}</span>
                                                    <p className="text-muted small">SIZE: L <br/> Brand: {val.item.company}</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td> <span>{val.quantity}</span></td>
                                        <td>
                                            <div className="price-wrap"> <var className="price">INR {val.item.price * val.quantity}</var> <small className="text-muted"> INR {val.item.price} each </small> </div>
                                        </td>
                                        <td><span>{val.item.description}</span></td>
                                        {/* <td className="text-right d-none d-md-block"> <a href="" className="btn btn-light" data-abc="true"> Remove</a> </td> */}
                                    </tr>
                                ))
                            : null 
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </aside>
            <aside className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <dl className="dlist-align">
                            <dt>Total price:</dt>
                            <dd className="text-right ml-3">INR {total}</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Discount:</dt>
                            <dd className="text-right text-danger ml-3">- INR 0</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Total:</dt>
                            <dd className="text-right text-dark b ml-3"><strong>INR {total}</strong></dd>
                        </dl>
                        <hr/> <button className="btn btn-out btn-primary btn-square btn-main" onClick={handleCreateOrder} data-abc="true"> Place Order </button> 
                        <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                    </div>
                </div>
            </aside>
        </div>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cart: selectCartItems,
    error: selectError,
    loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchCartItems: (id) => dispatch(fetchCartItems(id)),
    createOrderStart: (userId) => dispatch(createOrderStart(userId)),
    clearCart :(userId) => dispatch(clearCart(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);