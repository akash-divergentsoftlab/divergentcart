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
                <div class="container">
                    <div class="row">
                        <Sidebar />
                        <div class="span9">
                            <Breadcrumb />
                            <hr class="soft" />
                            <h3> Login</h3>
                            <hr class="soft" />
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;