import React from 'react';
import './breadcrumb.styles.scss';

function Breadcrumb() {
    return (
        <div className='breadcrumb-container'>
            <ul className="breadcrumb">
                <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                <li className="active">Special offers</li>
            </ul>
        </div>
    )
};

export default Breadcrumb;