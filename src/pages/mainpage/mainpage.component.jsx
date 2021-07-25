import React from 'react';
import './mainpage.styles.scss';

// components imports 
import Sidebar from '../../components/sidebar/sidebar.component';
import Breadcrumb from './../../components/breadcrumb/breadcrumb.component';
import Sorting from '../../components/sorting/sorting.component';
import Products from '../../components/products/products.component';
import Pagination from '../../components/pagination/pagination.component';


function Mainpage() {
    return (
        <div className='mainpage'>
            <div id="mainBody">
                <div class="container">
                    <div class="row">
                        <Sidebar />
                        <div class="span9">
                            <Breadcrumb />
                            <h4> 20% Discount Special offer<small class="pull-right"> 40 products are available </small></h4>
                            <hr class="soft" />
                            <Sorting />
                            <Products />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Mainpage;