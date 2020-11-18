import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {fetchProductStart} from '../../redux/product/actions';
import {addItemToCart} from '../../redux/cart/actions';
import {selectError,  selectProduct, selectLoading} from '../../redux/product/selectors';

import Prev from '../../assets/left-arrow.svg';
import Toast from '../../components/toast';
import Errors from '../../error';
import Loader from '../../components/loader';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/remove.svg';
import './index.css';

const ProductPage = ({error, product, fetchProductStart, match, history, addItemToCart, loading}) => {
    let [User, setQuantity] = useState({
        quan: 1,
    });
    const [list, setList] = useState([])
    useEffect(() => {
        if(match)
            fetchProductStart(match.params.id)
    }, [fetchProductStart, match]);
    useEffect(() => {
        setList([Errors[500]])
    }, [error]);
    const {quan} = User;
    
    const handleClick = () => {
        if(!localStorage.currentUser){
            alert("Login to purchase items")
            history.push('/login')
        }else{
            let currentUser = JSON.parse(localStorage.currentUser);
            addItemToCart({userId: currentUser.id, item: product, quantity: quan})
        }
        
    }
    return(
    <div className="product-page-container">
        <Loader isLoading={loading}/>
        {error? <Toast toastList={list}/> : null}
        {
            product === null ?
                null
            :
                <div className="product-container">
                    <div id="carouselExampleInterval" className="carousel slide d-flex" style={{width: "40%"}} data-ride="carousel">
                        <div class="carousel-inner"  >
                            <div class="carousel-item active" data-interval="10000" >
                                <img src={product.image1} alt="Product" />
                            </div>
                            <div className="carousel-item" data-interval="6000">
                                <img src={product.image2} alt="Product"   />
                            </div>
                            <div className="carousel-item" data-interval="2000">
                                <img src={product.image3} alt="Product"  />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="text-container">
                        <div>
                            <p style={{font:"40px Raleway"}}>{product.company}</p>
                            <p style={{font:"16px Open Sans"}}>{product.name}</p>
                        </div>
                        <div>
                            <p style={{font:"24px/29px Raleway"}}>Description</p>
                            <div className="desciption-container">
                                <p style={{font:"16px/24px Open Sans"}}>{product.description}</p>
                            </div>
                        </div>
                        <p style={{font:"24px/29px Raleway"}}>{product.price} INR/per piece</p>
                        <div className="quantity-container">
                            <img  src={Minus} onClick={() => {if(quan>1) setQuantity({ quan: quan-1})}} alt="Plus sign"/>
                            <span>{quan}</span>
                            <img src={Plus} onClick={() => setQuantity({quan: quan+1 })} alt="Minus Sign"/>
                        </div>
                        <button onClick={handleClick}>
                            Add To Cart
                        </button>
                    </div>
                </div>
        }
    </div >
)};
const mapStateToProps = createStructuredSelector({
    product: selectProduct,
    error: selectError,
    loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchProductStart: (id) => dispatch(fetchProductStart(id)),
    addItemToCart: (details) => dispatch(addItemToCart(details)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));
