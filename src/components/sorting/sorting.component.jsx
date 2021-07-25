import React from 'react';
import './sorting.styles.scss';

function Sorting() {
    return (
        <div className='sorting'>
            <form className="form-horizontal span6">
                <div className="control-group">
                    <label className="control-label alignL">Sort By </label>
                    <select>
                        <option>Priduct name A - Z</option>
                        <option>Priduct name Z - A</option>
                        <option>Priduct Stoke</option>
                        <option>Price Lowest first</option>
                    </select>
                </div>
            </form>
            <div id="myTab" className="pull-right">
                <a href="#listView" data-toggle="tab"><span className="btn btn-large"><i
                    className="icon-list"></i></span></a>
                <a href="#blockView" data-toggle="tab"><span className="btn btn-large btn-primary"><i
                    className="icon-th-large"></i></span></a>
            </div>
            <br className="clr" />
        </div>
    )
};

export default Sorting;