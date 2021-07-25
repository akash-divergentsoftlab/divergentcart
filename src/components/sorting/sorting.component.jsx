import React from 'react';
import './sorting.styles.scss';

function Sorting() {
    return (
        <div className='sorting'>
            <form class="form-horizontal span6">
                <div class="control-group">
                    <label class="control-label alignL">Sort By </label>
                    <select>
                        <option>Priduct name A - Z</option>
                        <option>Priduct name Z - A</option>
                        <option>Priduct Stoke</option>
                        <option>Price Lowest first</option>
                    </select>
                </div>
            </form>
            <div id="myTab" class="pull-right">
                <a href="#listView" data-toggle="tab"><span class="btn btn-large"><i
                    class="icon-list"></i></span></a>
                <a href="#blockView" data-toggle="tab"><span class="btn btn-large btn-primary"><i
                    class="icon-th-large"></i></span></a>
            </div>
            <br class="clr" />
        </div>
    )
};

export default Sorting;