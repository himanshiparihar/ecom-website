import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {fetchCategoriesStart} from '../../redux/category/actions';
import {selectCategoryList, selectError, selectLoading} from '../../redux/category/selectors';

import Toast from '../../components/toast';
import Errors from '../../error';
import Card from "../../components/card";
import Loader from '../../components/loader';

const Layout=({fetchCategoriesStart, error, categoryList, loading})=>{
    const [list, setList] = useState([])
    useEffect(() => {fetchCategoriesStart()}, [fetchCategoriesStart]);
    useEffect(() => {
        setList([Errors[500]])
    }, [error]);
    return(
       <React.Fragment>
           <Loader isLoading={loading}/>
           {error? <Toast toastList={list}/> : null}
           <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" style={{ "width":"100%" }} >
                <div class="carousel-item active" data-interval="10000" >
                    <img src="https://t3.ftcdn.net/jpg/02/82/82/94/240_F_282829409_0RFaKcDJp3OfKdqwF14g0nNwjJBRytjo.jpg" alt="..." style={{"width":"100%","paddingLeft":"40px","paddingRight":"40px", "height":"350px"}}/>
                </div>
                <div class="carousel-item" data-interval="2000">
                    <img src="https://t3.ftcdn.net/jpg/02/82/71/82/240_F_282718235_U6BBHkbQK6arZIVhJWXX7gdAcP8Glbq6.jpg" class="d-block w-100" alt="..."  style={{"width":"100%","paddingLeft":"40px","paddingRight":"40px", "height":"350px"}} />
                </div>
                <div class="carousel-item" style={{"height":"340px"}}>
                    <img src="https://startacus.net/uploads/image/the%20doorstep%20market.jpg" alt="..." style={{"width":"100%","paddingLeft":"40px","paddingRight":"40px", "height":"350px"}}/>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
           </div>
            <div className="layout">
                {categoryList === null ?
                    null
                :
                // console.log(categoryList)
                    categoryList.map((val,index)=>{
                        return(
                            <Card
                                key={val.id}
                                id={val.id}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                href= {`/category/${val.id}`}
                            />      
                        );
                    })
                }
            </div>
       </React.Fragment> 
    );
}
const mapStateToProps = createStructuredSelector({
    categoryList: selectCategoryList,
    error: selectError,
    loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);