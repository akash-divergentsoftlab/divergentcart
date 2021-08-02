import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import "./products.styles.scss";

const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:9000/api/product");
    setProduct(result.data);
  };

  return (
    <div className="productss">
      <div className="tab-content">
        <div className="tab-pane  active" id="blockView">
          <ul className="thumbnails">
            {products.map((product) => (
              <li className="span3">
                <div className="thumbnail">
                  <Link to={`/product-detail/${product.productId}`}>
                    <img
                      src={product.imageUrl}
                      style={{ height: "180px", width: "220px" }}
                      alt={product.productName}
                    />
                  </Link>
                  <div className="caption">
                    <h5>{product.productName}</h5>
                    <p>Rs {product.price}</p>
                    <h4 style={{ textAlign: "center" }}>
                      <a className="btn" href="/product-detail">
                        {" "}
                        View Detail
                      </a>{" "}
                      <a className="btn" href="/#">
                        Add to <i className="icon-shopping-cart"></i>
                      </a>{" "}
                    </h4>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <hr className="soft" />
        </div>
      </div>
    </div>
  );
};

// const Products = ({ allProducts }) => {
//   return (
//     <div className="productss">
//       <div className="tab-content">
//         <div className="tab-pane  active" id="blockView">
//           <ul className="thumbnails">
//           {allProducts.map((product) => (
//                 <li className="span3">
//                 <div className="thumbnail">
//                   <a href="/product-detail">
//                     <img src={product.imageUrl} style={{height:'180px', width:'220px'}} alt={product.productName} />
//                   </a>
//                   <div className="caption">
//                     <h5>{product.productName}</h5>
//                     <p>Rs {product.price}</p>
//                     <h4 style={{ textAlign: "center" }}>
//                       <a className="btn" href="/product-detail">
//                         {" "}
//                         View Detail
//                       </a>{" "}
//                       <a className="btn" href="/#">
//                         Add to <i className="icon-shopping-cart"></i>
//                       </a>{" "}

//                     </h4>
//                   </div>
//                 </div>
//                 </li>
//               ))}
//           </ul>
//           <hr className="soft" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Products;
