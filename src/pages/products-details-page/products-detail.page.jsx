import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products-detail.styles.scss";

// other components imports are here
import Sidebar from "../../components/sidebar/sidebar.component";
import Breadcrumb from "./../../components/breadcrumb/breadcrumb.component";
// import ProductDetailGallery from "../../components/product-detail-gallery/product-detail-gallery.component";
// import OneProductDetail from "../../components/product-detail/product-details/product-details.component";
// import ProductInformation from "./../../components/product-detail/product-information/product-information.component";
import RelatedProducts from "./../../components/product-detail/related-products/related-products.component";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [products, setProduct] = useState({
    productName: "",
    imageUrl: "",
    description: "",
    colour: "",
    brandName: "",
    price: "",
    productSize: "",
    quantity: "",
    subCategoryName: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:9000/api/product/find/${id}`);
    setProduct(res.data);
  };

  return (
    <div className="products-detail">
      <div id="mainBody">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="span9">
              <Breadcrumb />
              <hr className="soft" />

              <div className="row">
                <div className="product-detail-gallery">
                  <div id="gallery" className="span3">
                    <a href={products.imageUrl} title={products.productName}>
                      <img
                        src={products.imageUrl}
                        style={{ width: "100%" }}
                        alt="Fujifilm FinePix S2950 Digital Camera"
                      />
                    </a>
                    <div
                      id="differentview"
                      className="moreOptopm carousel slide"
                    ></div>
                  </div>
                </div>

                <div className="function">
                  <div className="span6">
                    <h3>{products.productName}</h3>
                    <small>- {products.subCategoryName}</small>
                    <hr className="soft" />
                    <form className="form-horizontal qtyFrm">
                      <div className="control-group">
                        <label className="control-label">
                          <span>₹ 222.00</span>
                        </label>
                        <div className="controls">
                          <input
                            type="number"
                            className="span1"
                            placeholder="Qty."
                          />
                          <button
                            type="submit"
                            className="btn btn-large btn-primary pull-right"
                          >
                            {" "}
                            Add to cart
                            <i className=" icon-shopping-cart"></i>
                          </button>
                        </div>
                      </div>
                    </form>

                    <hr className="soft" />
                    <h4>100 items in stock</h4>
                    <form className="form-horizontal qtyFrm pull-right">
                      <div className="control-group">
                        <label className="control-label">
                          <span>Color : {products.colour}</span>
                        </label>
                      </div>
                    </form>
                    <hr className="soft clr" />
                    <p>{products.description}</p>
                    <a className="btn btn-small pull-right" href="#detail">
                      More Details
                    </a>
                    <br className="clr" />
                    <a href="/#" name="detail">
                      
                    </a>
                    <hr className="soft" />
                  </div>
                </div>
                <div className="span9">
                  <ul id="productDetail" className="nav nav-tabs">
                    <li className="active">
                      <a href="#home" data-toggle="tab">
                        Product Details
                      </a>
                    </li>
                    <li>
                      <a href="#profile" data-toggle="tab">
                        Related Products
                      </a>
                    </li>
                  </ul>
                  <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active in" id="home">
                      <div className="product-information">
                        <h4>Product Information</h4>
                        <table className="table table-bordered">
                          <tbody>
                            <tr className="techSpecRow">
                              <th colspan="2">Product Details</th>
                            </tr>
                            <tr className="techSpecRow">
                              <td className="techSpecTD1">Brand: </td>
                              <td className="techSpecTD2">{products.brandName}</td>
                            </tr>
                            <tr className="techSpecRow">
                              <td className="techSpecTD1">category:</td>
                              <td className="techSpecTD2">{products.subCategoryName}</td>
                            </tr>
                            <tr className="techSpecRow">
                              <td className="techSpecTD1">Released on:</td>
                              <td className="techSpecTD2"> {products.createdAt}</td>
                            </tr>
                            <tr className="techSpecRow">
                              <td className="techSpecTD1">Dimensions or Size:</td>
                              <td className="techSpecTD2">
                                {" "}
                                {products.productSize}
                              </td>
                            </tr>
                            <tr className="techSpecRow">
                              <td className="techSpecTD1">Minimum quantity :</td>
                              <td className="techSpecTD2">{products.quantity}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <RelatedProducts />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
