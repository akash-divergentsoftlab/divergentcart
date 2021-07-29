import React from 'react';
import Products from '../products/products.component';
import './product-list.styles.scss';

function ProductList() {
    return (
        <div className='product-list'>
            <Products />
        </div>
    )
};

export default ProductList;