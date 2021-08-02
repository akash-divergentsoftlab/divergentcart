import React from "react";
import "./all-products.styles.scss";

const AllProducts = ({ allProducts2 }) => {
  return (
    <div className="all-products">
      <h4>Latest Products </h4>
      <ul className="thumbnails">
        {allProducts2.map((product) => (
          <li className="span3">
            <div className="thumbnail">
              <a href="product_details.html">
                <img
                  src={product.imageUrl}
                  style={{ height: "180px", width: "220px" }}
                  alt={product.productName}
                />
              </a>
              <div className="caption">
                <h5>{product.productName}</h5>
                <p>{product.subCategoryName}</p>

                <h4 style={{ textAlign: "center" }}>
                  <a className="btn" href="product_details.html">
                    <i className="icon-zoom-in"></i>
                  </a>
                  <a className="btn" href="/#">
                    Add to <i className="icon-shopping-cart"></i>
                  </a>
                  <a className="btn btn-primary" href="/#">
                    ₹{product.price}.00
                  </a>
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
