import React from 'react';
import './registrationpage.styles.scss';

// other components imports are here 
import Sidebar from './../../components/sidebar/sidebar.component';
import Breadcrumb from './../../components/breadcrumb/breadcrumb.component';
// import Registration from './../../components/registration/registration.component';



function RegistrationPage() {
    return (
        <div className='registrationpage'>
            <div id="mainBody">
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="span9">
                            <Breadcrumb />
                            <hr className="soft" />
                            <h3> Registration</h3>
                            <div className="well">
                                {/* <Registration /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegistrationPage;