import React from 'react';
import './homepage.styles.scss';

// homepage components imports are here 
import Carousel from './../../components/carousel/carousel.component';
import FeaturedProducts from '../../components/featured-products/featured-products.component';
import AllProducts from '../../components/all-products/all-products.component';
import Sidebar from './../../components/sidebar/sidebar.component';





function Homepage() {
    return (
        <div className='homepage'>
            <Carousel />
            <div id="mainBody">
                <div class="container">
                    <div class="row">
                        <Sidebar />
                        <div class="span9">
                            <FeaturedProducts />
                            <AllProducts/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;