// import React, { Component } from 'react'
// import Products from '../products/products.component';
// import './product-list.styles.scss';

// class ProductList extends Component {
    
//     state ={
//         allProducts : [],
//     }

//     componentDidMount() {
//         fetch("http://localhost:9000/api/product")
//         .then((res) => res.json())
//         .then((data) => {
//           this.setState({ allProducts: data });
//         })
//         .catch(console.log);
//     }
//     render() {
//         return (
//           <div class="card">
            
//             <Products allProducts={this.state.allProducts} />
//           </div>
//         );
//       }

// };



// export default ProductList;