import React from 'react';
import './product-detail-gallery.styles.scss';

function ProductDetailGallery() {
    return (
        <div className='product-detail-gallery'>
            <div id="gallery" class="span3">
                <a href="themes/images/products/large/f1.jpg" title="Fujifilm FinePix S2950 Digital Camera">
                    <img src="themes/images/products/large/3.jpg" style={{width:'100%'}}
                        alt="Fujifilm FinePix S2950 Digital Camera" />
                </a>
                <div id="differentview" class="moreOptopm carousel slide">
                    <div class="carousel-inner">
                        <div class="item active">
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
                        <div class="item">
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
			  <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a> 
			  --> */}
                </div>
            </div>
        </div>
    )
};

export default ProductDetailGallery;