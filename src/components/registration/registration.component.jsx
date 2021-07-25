import React from 'react';
import './registration.styles.scss';

function Registration() {
    return (
        <div className='registration'>
            <form className="form-horizontal">
                <h4>Your personal information</h4>
                <div className="control-group">
                    <label className="control-label" for="inputFname1">First name <sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="inputFname1" placeholder="First Name" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="inputLnam">Last name <sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="inputLnam" placeholder="Last Name" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="input_email">Email <sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="input_email" placeholder="Email" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="input_password">Password <sup>*</sup></label>
                    <div className="controls">
                        <input type="password" id="input_password" placeholder="Password" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="input_password">Re-enter Password <sup>*</sup></label>
                    <div className="controls">
                        <input type="password" id="input_password" placeholder="Password" />
                    </div>
                </div>


                <h4>Your address</h4>
                <div className="control-group">
                    <label className="control-label" for="inputFname">First name <sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="inputFname" placeholder="First Name" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="inputLname">Last name <sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="inputLname" placeholder="Last Name" />
                    </div>
                </div>

                <div className="control-group">
                    <label className="control-label" for="company">Company</label>
                    <div className="controls">
                        <input type="text" id="company" placeholder="company" />
                    </div>
                </div>

                <div className="control-group">
                    <label className="control-label" for="address">Address<sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="address" placeholder="Adress" /> <span></span>
                    </div>
                </div>

                <div className="control-group">
                    <label className="control-label" for="address2">Address (Line 2)<sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="address2" placeholder="Adress line 2" /> <span></span>
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="city">City<sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="city" placeholder="city" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="state">State<sup>*</sup></label>
                    <div className="controls">
                        <select id="state">
                            <option value="">-</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label" for="postcode">Zip / Postal Code<sup>*</sup></label>
                    <div className="controls">
                        <input type="text" id="postcode" placeholder="Zip / Postal Code" />
                    </div>
                </div>

        
                <div className="control-group">
                    <label className="control-label" for="phone">Home phone <sup>*</sup></label>
                    <div className="controls">
                        <input type="text" name="phone" id="phone" placeholder="phone" /> <span></span>
                    </div>
                </div>

                <div className="control-group">
                    <label className="control-label" for="mobile">Mobile Phone </label>
                    <div className="controls">
                        <input type="text" name="mobile" id="mobile" placeholder="Mobile Phone" />
                    </div>
                </div>

                <p><sup>*</sup>Required field </p>

                <div className="control-group">
                    <div className="controls">
                        <input type="hidden" name="email_create" value="1" />
                        <input type="hidden" name="is_new_customer" value="1" />
                        <input className="btn btn-large btn-success" type="submit" value="Register" />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Registration;