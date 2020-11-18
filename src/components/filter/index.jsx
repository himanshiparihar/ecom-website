import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectProductList} from '../../redux/product/selectors';
import { filterProductStart, fetchProductListStart } from '../../redux/product/actions';
import './index.css';

const Filter  = ({productList, filterProductStart, fetchProductListStart}) => {
    let [subCategory, setSubCategory] = useState([]);
    let [selected, setSelected] = useState([]);
    useEffect(() => {
        if(productList){
            let temp =[];
            productList.forEach(product => {
                temp.push(product.sub_category);
            }); 
            let temp1 = temp.filter((item, i, ar) => ar.indexOf(item) === i)
            setSubCategory(temp1);
            setSelected(temp1.map(cat => {return false}));
        }
    }, [productList])
    
    const handleChange = async(index) => {
        let temp = [];
        if(selected[index] === true)
            temp = selected.map(cat => {return cat});
        else
            temp = selected.map(cat => {return false});
        temp[index] = !temp[index];
        await setSelected(temp);
        if(temp.includes(true)){
            await filterProductStart({category_id: productList[index].category_id, sub_category: subCategory[index]})
        } else {
            await fetchProductListStart(productList[index].category_id);
        }
    }

    return(
        <aside className="filter-container">
            <p>Filter</p>
            <div className="card">
                <article className="card-group-item">
                    <header className="card-header">
                        <h6 className="title">Subcategories</h6>
                    </header>
                    <div className="filter-content">
                        <div className="card-body">
                            <div>
                                { 
                                    subCategory.length ===0 ? 
                                    null:
                                    subCategory.map((cat, index) => (
                                        <label className="form-check" style={{display:"block"}}>
                                            <input className="form-check-input" type="checkbox" checked={selected[index]} onChange={() => handleChange(index)}/>
                                            <span className="form-check-label">
                                                {cat}
                                            </span>
                                        </label> 
                                    ))
                                } 
                            </div>
                        </div> 
                    </div>
                </article> 
            </div> 
        </aside>
)}


const mapStateToProps = createStructuredSelector({
    productList: selectProductList,
});

const mapDispatchToProps = dispatch => ({
    filterProductStart: (details) => dispatch(filterProductStart(details)),
    fetchProductListStart: (categoryId) => dispatch(fetchProductListStart(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);