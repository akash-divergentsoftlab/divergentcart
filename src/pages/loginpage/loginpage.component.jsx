import React from 'react';
import './loginpage.styles.scss';

// other components imports are here 
import Sidebar from './../../components/sidebar/sidebar.component';
import Breadcrumb from './../../components/breadcrumb/breadcrumb.component';
import LoginForm from './../../components/login-form/login-form.component';



function LoginPage() {
    return (
        <div className='loginpage'>
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="span9">
                            <Breadcrumb />
                            <hr className="soft" />
                            <h3> Login</h3>
                            <hr className="soft" />
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;