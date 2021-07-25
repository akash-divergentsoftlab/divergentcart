import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className='header'>
            <div id="header">
                <div className="container">
                    {/* <!-- Navbar ================================================== --> */}
                    <div id="logoArea" className="navbar">
                        <a id="smallScreen" href='/#' data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                        <div className="navbar-inner">
                            <Link className="brand" to="/">DivergentCart</Link>
                            <form className="form-inline navbar-search" method="post" action="products.html">
                                <input id="srchFld" className="srchTxt" type="text" />
                                <button type="submit" id="submitButton" className="btn btn-primary">Search</button>
                            </form>
                            <ul id="topMenu" className="nav pull-right">
                                <li className=""><Link to="/main-page">Home</Link></li>
                                <li className=""><Link to="/register">Register</Link></li>
                                <li className="">
                                    <a href="/#login" role="button" data-toggle="modal" ><span
                                        className="btn btn-large btn-success">Login</span></a>
                                    <div id="login" className="modal hide fade in" tabIndex="-1" role="dialog"
                                        aria-labelledby="login" aria-hidden="false">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal"
                                                aria-hidden="true">×</button>
                                            <h3>Login </h3>
                                        </div>
                                        <div className="modal-body">
                                            <form className="form-horizontal loginFrm">
                                                <div className="control-group">
                                                    <input type="text" id="inputEmail" placeholder="Email" />
                                                </div>
                                                <div className="control-group">
                                                    <input type="password" id="inputPassword" placeholder="Password" />
                                                </div>
                                            </form>
                                            <button type="submit" className="btn btn-success">Sign in</button>
                                            <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
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