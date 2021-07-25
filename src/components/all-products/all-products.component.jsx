import React from 'react';
import './all-products.styles.scss';

function AllProducts() {
    return (
        <div className='all-products'>
            <h4>Latest Products </h4>
            <ul className="thumbnails">
                <li className="span3">
                    <div className="thumbnail">
                        <a href="product_details.html"><img src="themes/images/products/6.jpg" alt="" /></a>
                        <div className="caption">
                            <h5>Product name</h5>
                            <p>
                                Lorem Ipsum is simply dummy text.
                            </p>

                            <h4 style={{textAlign:'center'}}><a className="btn" href="product_details.html"> <i
                                className="icon-zoom-in"></i></a> <a className="btn" href="/#">Add to <i
                                    className="icon-shopping-cart"></i></a> <a className="btn btn-primary"
                                        href="/#">$222.00</a></h4>
                        </div>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail">
                        <a href="product_details.html"><img src="themes/images/products/7.jpg" alt="" /></a>
                        <div className="caption">
                            <h5>Product name</h5>
                            <p>
                                Lorem Ipsum is simply dummy text.
                            </p>
                            <h4 style={{textAlign:'center'}}><a className="btn" href="product_details.html"> <i
                                className="icon-zoom-in"></i></a> <a className="btn" href="/#">Add to <i
                                    className="icon-shopping-cart"></i></a> <a className="btn btn-primary"
                                        href="/#">$222.00</a></h4>
                        </div>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail">
                        <a href="product_details.html"><img src="themes/images/products/8.jpg" alt="" /></a>
                        <div className="caption">
                            <h5>Product name</h5>
                            <p>
                                Lorem Ipsum is simply dummy text.
                            </p>
                            <h4 style={{textAlign:'center'}}><a className="btn" href="product_details.html"> <i
                                className="icon-zoom-in"></i></a> <a className="btn" href="/#">Add to <i
                                    className="icon-shopping-cart"></i></a> <a className="btn btn-primary"
                                        href="/#">$222.00</a></h4>
                        </div>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail">
                        <a href="product_details.html"><img src="themes/images/products/9.jpg" alt="" /></a>
                        <div className="caption">
                            <h5>Product name</h5>
                            <p>
                                Lorem Ipsum is simply dummy text.
                            </p>
                            <h4 style={{textAlign:'center'}}><a className="btn" href="product_details.html"> <i
                                className="icon-zoom-in"></i></a> <a className="btn" href="/#">Add to <i
                                    className="icon-shopping-cart"></i></a> <a className="btn btn-primary"
                                        href="/#">$222.00</a></h4>
                        </div>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail">
                        <a href="product_details.html"><img src="themes/images/products/10.jpg" alt="" /></a>
                        <div className="caption">
                            <h5>Product name</h5>
                            <p>
                                Lorem Ipsum is simply dummy text.
                            </p>
                            <h4 style={{textAlign:'center'}}><a className="btn" href="product_details.html"> <i
                                className="icon-zoom-in"></i></a> <a className="btn" href="/#">Add to <i
                                    className="icon-shopping-cart"></i></a> <a className="btn btn-primary"
                                        href="/#">$222.00</a></h4>
                        </div>
                    </div>
                </li>
                <li className="span3">
                    <div className="thumbnail">
                        <a href="product_details.html"><img src="themes/images/products/11.jpg" alt="" /></a>
                        <div className="caption">
                            <h5>Product name</h5>
                            <p>
                                Lorem Ipsum is simply dummy text.
                            </p>
                            <h4 style={{textAlign:'center'}}><a className="btn" href="product_details.html"> <i
                                className="icon-zoom-in"></i></a> <a className="btn" href="/#">Add to <i
                                    className="icon-shopping-cart"></i></a> <a className="btn btn-primary"
                                        href="/#">$222.00</a></h4>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default AllProducts;