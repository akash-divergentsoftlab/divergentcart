import React from 'react';
import './cart-user-registration.styles.scss';

function CartUserRegistration() {
    return (
        <div className='cart-user-registration'>
            <table className="table table-bordered">
                <tr>
                    <th> I AM ALREADY REGISTERED </th>
                </tr>
                <tr>
                    <td>
                        <form className="form-horizontal">
                            <div className="control-group">
                                <label className="control-label" for="inputUsername">Username</label>
                                <div className="controls">
                                    <input type="text" id="inputUsername" placeholder="Username" />
                                </div>
                            </div>
                            <div className="control-group">
                                <label className="control-label" for="inputPassword1">Password</label>
                                <div className="controls">
                                    <input type="password" id="inputPassword1" placeholder="Password" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="controls">
                                    <button type="submit" className="btn">Sign in</button> OR <a
                                        href="register.html" className="btn">Register Now!</a>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="controls">
                                    <a href="forgetpass.html" style={{textDecoration:'underline'}}>Forgot password
                                        ?</a>
                                </div>
                            </div>
                        </form>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default CartUserRegistration;