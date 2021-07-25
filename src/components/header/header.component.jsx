import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className='header'>
            <div id="header">
                <div class="container">
                    {/* <!-- Navbar ================================================== --> */}
                    <div id="logoArea" class="navbar">
                        <a id="smallScreen" href='/#' data-target="#topMenu" data-toggle="collapse" class="btn btn-navbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                        <div class="navbar-inner">
                            <Link class="brand" to="/">DivergentCart</Link>
                            <form class="form-inline navbar-search" method="post" action="products.html">
                                <input id="srchFld" class="srchTxt" type="text" />
                                <button type="submit" id="submitButton" class="btn btn-primary">Search</button>
                            </form>
                            <ul id="topMenu" class="nav pull-right">
                                <li class=""><Link to="/main-page">Home</Link></li>
                                <li class=""><Link to="/register">Register</Link></li>
                                <li class="">
                                    <a href="/#login" role="button" data-toggle="modal" ><span
                                        class="btn btn-large btn-success">Login</span></a>
                                    <div id="login" class="modal hide fade in" tabindex="-1" role="dialog"
                                        aria-labelledby="login" aria-hidden="false">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-hidden="true">×</button>
                                            <h3>Login </h3>
                                        </div>
                                        <div class="modal-body">
                                            <form class="form-horizontal loginFrm">
                                                <div class="control-group">
                                                    <input type="text" id="inputEmail" placeholder="Email" />
                                                </div>
                                                <div class="control-group">
                                                    <input type="password" id="inputPassword" placeholder="Password" />
                                                </div>
                                            </form>
                                            <button type="submit" class="btn btn-success">Sign in</button>
                                            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End====================================================================== --> */}
        </div>
    )
};

export default Header;