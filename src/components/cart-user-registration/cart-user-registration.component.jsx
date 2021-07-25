import React from 'react';
import './cart-user-registration.styles.scss';

function CartUserRegistration() {
    return (
        <div className='cart-user-registration'>
            <table class="table table-bordered">
                <tr>
                    <th> I AM ALREADY REGISTERED </th>
                </tr>
                <tr>
                    <td>
                        <form class="form-horizontal">
                            <div class="control-group">
                                <label class="control-label" for="inputUsername">Username</label>
                                <div class="controls">
                                    <input type="text" id="inputUsername" placeholder="Username" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="inputPassword1">Password</label>
                                <div class="controls">
                                    <input type="password" id="inputPassword1" placeholder="Password" />
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <button type="submit" class="btn">Sign in</button> OR <a
                                        href="register.html" class="btn">Register Now!</a>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
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