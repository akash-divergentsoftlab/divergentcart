import React from 'react';
import './login-form.styles.scss';

function LoginForm() {
    return (
        <div className='login-form.'>
            <div className="row">
                <div className="span4">
                    <div className="well">
                        <h5>CREATE YOUR ACCOUNT</h5><br />
                        Enter your e-mail address to create an account.<br /><br /><br />
                        <form action="register.html">
                            <div className="control-group">
                                <label className="control-label" for="inputEmail0">E-mail address</label>
                                <div className="controls">
                                    <input className="span3" type="text" id="inputEmail0" placeholder="Email" />
                                </div>
                            </div>
                            <div className="controls">
                                <button type="submit" className="btn block">Create Your Account</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="span1"> &nbsp;</div>
                <div className="span4">
                    <div className="well">
                        <h5>ALREADY REGISTERED ?</h5>
                        <form>
                            <div className="control-group">
                                <label className="control-label" for="inputEmail1">Email</label>
                                <div className="controls">
                                    <input className="span3" type="text" id="inputEmail1" placeholder="Email" />
                                </div>
                            </div>
                            <div className="control-group">
                                <label className="control-label" for="inputPassword1">Password</label>
                                <div className="controls">
                                    <input type="password" className="span3" id="inputPassword1"
                                        placeholder="Password" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="controls">
                                    <button type="submit" className="btn">Sign in</button> <a
                                        href="forgetpass.html">Forget password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;