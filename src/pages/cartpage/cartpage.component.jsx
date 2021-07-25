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
                <div class="container">
                    <div class="row">
                        <Sidebar />
                        <div class="span9">
                            <Breadcrumb />
                            <hr class="soft" />
                            <h3> SHOPPING CART [ <small>3 Item(s) </small>]<a href="products.html"
                                class="btn btn-large pull-right"><i class="icon-arrow-left"></i> Continue Shopping </a></h3>
                            <hr class="soft" />
                            <CartUserRegistration />
                            <CartBasket />
                            <a href="products.html" class="btn btn-large"><i class="icon-arrow-left"></i> Continue Shopping </a>
                            <a href="login.html" class="btn btn-large pull-right">Next <i class="icon-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartPage;