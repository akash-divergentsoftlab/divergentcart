import React from 'react';
import './cartpage.styles.scss';

// other components imports are here 

import Breadcrumb from './../../components/breadcrumb/breadcrumb.component';
import Sidebar from './../../components/sidebar/sidebar.component';
import CartUserRegistration from '../../components/cart-user-registration/cart-user-registration.component';
import CartBasket from '../../components/cart-basket/cart-basket.component';


function CartPage() {
    return (
        <div className='function'>
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="span9">
                            <Breadcrumb />
                            <hr className="soft" />
                            <h3> SHOPPING CART [ <small>3 Item(s) </small>]<a href="products.html"
                                className="btn btn-large pull-right"><i className="icon-arrow-left"></i> Continue Shopping </a></h3>
                            <hr className="soft" />
                            <CartUserRegistration />
                            <CartBasket />
                            <a href="products.html" className="btn btn-large"><i className="icon-arrow-left"></i> Continue Shopping </a>
                            <a href="login.html" className="btn btn-large pull-right">Next <i className="icon-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartPage;