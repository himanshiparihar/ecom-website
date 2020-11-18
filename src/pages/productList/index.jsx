import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {fetchProductListStart} from '../../redux/product/actions';
import {selectFilteredList, selectError, selectLoading} from '../../redux/product/selectors';

import Toast from '../../components/toast';
import Errors from '../../error';
import Loader from '../../components/loader';
import Card from '../../components/card';
import Filter from '../../components/filter';
import './index.css';

const ProductList =({match, error, productList, fetchProductsStart, loading})=>{
    const [list, setList] = useState([])
    useEffect(() => {
        if(match)
            fetchProductsStart(match.params.id)
    }, [fetchProductsStart, match]);
    useEffect(() => {
        setList([Errors[500]])
    }, [error]);
    return(
        <div className="product-list-container">
            <Loader isLoading={loading} />
            {error? <Toast toastList={list}/> : null}
            <Filter />
            <div>
            {
                productList === null  ?
                    null
                :
                    productList.map((val)=>{
                        return( <Card
                            key={val.id}
                            id={val.id}
                            imgsrc={val.image1}
                            title={val.title}
                            href= {`/product/${val.id}`}
                        />)
                    })
            }
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    productList: selectFilteredList,
    error: selectError,
    loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchProductsStart: (categoryId) => dispatch(fetchProductListStart(categoryId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));