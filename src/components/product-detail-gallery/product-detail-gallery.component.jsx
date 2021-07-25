import React from 'react';
import './product-detail-gallery.styles.scss';

function ProductDetailGallery() {
    return (
        <div className='product-detail-gallery'>
            <div id="gallery" className="span3">
                <a href="themes/images/products/large/f1.jpg" title="Fujifilm FinePix S2950 Digital Camera">
                    <img src="themes/images/products/large/3.jpg" style={{width:'100%'}}
                        alt="Fujifilm FinePix S2950 Digital Camera" />
                </a>
                <div id="differentview" className="moreOptopm carousel slide">
                    <div className="carousel-inner">
                        <div className="item active">
                            <a href="themes/images/products/large/f1.jpg">
                                <img style={{width:'29%'}}
                                    src="themes/images/products/large/f1.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f2.jpg">
                                <img style={{width:'29%'}}
                                    src="themes/images/products/large/f2.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f3.jpg">
                                <img style={{width:'29%'}}
                                    src="themes/images/products/large/f3.jpg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="themes/images/products/large/f3.jpg">
                                <img style={{width:'29%'}}
                                    src="themes/images/products/large/f3.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f1.jpg">
                                <img style={{width:'29%'}}
                                    src="themes/images/products/large/f1.jpg" alt="" /></a>
                            <a href="themes/images/products/large/f2.jpg">
                                <img style={{width:'29%'}}
                                    src="themes/images/products/large/f2.jpg" alt="" /></a>
                        </div>
                    </div>
                    {/* <!--  
			  <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a> 
			  --> */}
                </div>
            </div>
        </div>
    )
};

export default ProductDetailGallery;