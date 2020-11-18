import React from 'react';
import { connect } from "react-redux";

import {cancelOrderStart} from '../../redux/order/actions';
import "./index.css"

function orders({company, name, quantity, price, orderId, status, image, cancelOrder}) {
    const handleCancleOrder = async (e) => {
        await e.preventDefault();
        cancelOrder(orderId);
    }
    return (
        <React.Fragment> 
            <div className="row mt-4">
                <div className="col">
                    <div className="card card-2">
                        <div className="card-body">
                            <div className="media">
                                <div className="sq align-sel-center "> <img className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src={image} style={{width:"100px"}} alt="Item"/> </div>
                                <div className="media-body my-auto text-right">
                                    <div className="row my-auto flex-column flex-md-row">
                                        <div className="col-auto my-auto ">
                                            <h6 className="mb-0">{company}</h6>
                                        </div>
                                        <div className="col-auto my-auto "> <small>{name} </small></div>
                                        <div className="col-auto my-auto "> <small>Size : L</small></div>
                                        <div className="col-auto my-auto "> <small>Qty : {quantity}</small></div>
                                        <div className="col-auto my-auto ">
                                            <h6 className="mb-0">&#8377;{price}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 "/>
                            <div className="row justify-content-between mb-3">
                                <div className="col-auto"> <small>Order ID : {orderId}</small> </div>
                                <div className="col-auto"> <small>Status : {status}</small> </div>
                                {
                                    status !== "Canceled" ?
                                    <div className="col-auto">
                                        <span className="btn btn-light" onClick={handleCancleOrder} data-abc="true">Cancel</span>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
     cancelOrder: (id) => dispatch(cancelOrderStart(id)),
});
export default connect(null, mapDispatchToProps)(orders);