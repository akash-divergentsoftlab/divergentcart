import React from 'react';
import './pagination.styles.scss';

function Pagination() {
    return (
        <div className='pagination'>
            <a href="compair.html" className="btn btn-large pull-right">Compair Product</a>
            <div className="pagination">
                <ul>
                    <li><a href="c">&lsaquo;</a></li>
                    <li><a href="/#">1</a></li>
                    <li><a href="/#">2</a></li>
                    <li><a href="/#">3</a></li>
                    <li><a href="/#">4</a></li>
                    <li><a href="/#">...</a></li>
                    <li><a href="/#">&rsaquo;</a></li>
                </ul>
            </div>
            <br className="clr" />
        </div>
    )
};

export default Pagination;