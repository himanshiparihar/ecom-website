import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import {selectError, selectLoading, selectOrderList} from '../../redux/order/selectors';
import {fetchOrdersStart} from '../../redux/order/actions';

import Loader from '../../components/loader';
import Toast from '../../components/toast'
import EmptyOrder from '../../components/empty-order';
import Order from '../../components/order';
import Errors from '../../error';

import "./index.css"

function Orders({error, loading, orders, fetchOrdersStart}) {
    const [list, setList] = useState([]);
    useEffect(() => {
        setList([Errors[401]])
    }, [error]);
    useEffect(() => {
        let currentUser = JSON.parse(localStorage.currentUser);
        fetchOrdersStart(currentUser.id);
    }, [fetchOrdersStart]);
    return (
        <React.Fragment >
            <Loader isLoading={loading}/>
            {error? <Toast toastList={list}/> : null}
            <div className="order-page-container">
                {/* <div className="page-fullWidthComponent">
                    <EmptyOrder />
                    
                    
                </div> */}
                {orders && orders.length > 0 ? 
                   
                    <div className="container-fluid my-5 d-flex justify-content-center">
                        <div className="card-1">
                            <div className="card-header bg-white">
                                <div className="media flex-sm-row flex-column-reverse justify-content-between ">
                                    <div className="col my-auto">
                                        <h4 className="mb-0">Order History</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                {orders.map((order,index) => (
                                     <Order 
                                        key={index}
                                        company={order.item.company}
                                        name={order.item.title}
                                        quantity={order.quantity}
                                        price={order.total_price}
                                        orderId={order.id}
                                        status={order.status}
                                        image={order.item.image1}
                                     />
                                ))}
                            </div>
                        </div>
                    </div>
                :
                    <div className="page-fullWidthComponent">
                        <EmptyOrder />
                    </div>
                }
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = createStructuredSelector({
    orders: selectOrderList,
    error: selectError,
    loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchOrdersStart: (id) => dispatch(fetchOrdersStart(id)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Orders);