import React from 'react';
import './products-detail.styles.scss';

// other components imports are here 
import Sidebar from '../../components/sidebar/sidebar.component';
import Breadcrumb from './../../components/breadcrumb/breadcrumb.component';
import ProductDetailGallery from '../../components/product-detail-gallery/product-detail-gallery.component';
import OneProductDetail from '../../components/product-detail/product-details/product-details.component';
import ProductInformation from './../../components/product-detail/product-information/product-information.component';
import RelatedProducts from './../../components/product-detail/related-products/related-products.component';



function ProductDetail() {
    return (
        <div className='products-detail'>
            <div id="mainBody">
                <div class="container">
                    <div class="row">
                        <Sidebar />
                        <div class="span9">
                            <Breadcrumb />
                            <hr class="soft" />
                            <div class="row">
                                <ProductDetailGallery />
                                <OneProductDetail />
                                <div class="span9">
                                    <ul id="productDetail" class="nav nav-tabs">
                                        <li class="active"><a href="#home" data-toggle="tab">Product Details</a></li>
                                        <li><a href="#profile" data-toggle="tab">Related Products</a></li>
                                    </ul>
                                    <div id="myTabContent" class="tab-content">
                                        <div class="tab-pane fade active in" id="home">
                                            <ProductInformation />
                                            <RelatedProducts />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;