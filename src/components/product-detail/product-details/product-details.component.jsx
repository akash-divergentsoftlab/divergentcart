import React from 'react';
import './product-details.styles.scss';

function OneProductDetail() {
    return (
        <div className='function'>
            <div className="span6">
                <h3>Fujifilm FinePix S2950 Digital Camera </h3>
                <small>- (14MP, 18x Optical Zoom) 3-inch LCD</small>
                <hr className="soft" />
                <form className="form-horizontal qtyFrm">
                    <div className="control-group">
                        <label className="control-label"><span>$222.00</span></label>
                        <div className="controls">
                            <input type="number" className="span1" placeholder="Qty." />
                            <button type="submit" className="btn btn-large btn-primary pull-right"> Add to cart
                                <i className=" icon-shopping-cart"></i></button>
                        </div>
                    </div>
                </form>

                <hr className="soft" />
                <h4>100 items in stock</h4>
                <form className="form-horizontal qtyFrm pull-right">
                    <div className="control-group">
                        <label className="control-label"><span>Color</span></label>
                        <div className="controls">
                            <select className="span2">
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Brown</option>
                            </select>
                        </div>
                    </div>
                </form>
                <hr className="soft clr" />
                <p>
                    14 Megapixels. 18.0 x Optical Zoom. 3.0-inch LCD Screen. Full HD photos and 1280 x 720p
                    HD movie capture. ISO sensitivity ISO6400 at reduced resolution.
                    Tracking Auto Focus. Motion Panorama Mode. Face Detection technology with Blink
                    detection and Smile and shoot mode. 4 x AA batteries not included. WxDxH 110.2
                    ×81.4x73.4mm.
                    Weight 0.341kg (excluding battery and memory card). Weight 0.437kg (including battery
                    and memory card).

                </p>
                <a className="btn btn-small pull-right" href="#detail">More Details</a>
                <br className="clr" />
                <a href="/#" name="detail">v</a>
                <hr className="soft" />
            </div>
        </div>
    )
};

export default OneProductDetail;