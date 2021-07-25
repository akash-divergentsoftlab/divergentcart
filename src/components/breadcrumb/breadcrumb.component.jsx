import React from 'react';
import './breadcrumb.styles.scss';

function Breadcrumb() {
    return (
        <div className='breadcrumb-container'>
            <ul class="breadcrumb">
                <li><a href="index.html">Home</a> <span class="divider">/</span></li>
                <li class="active">Special offers</li>
            </ul>
        </div>
    )
};

export default Breadcrumb;