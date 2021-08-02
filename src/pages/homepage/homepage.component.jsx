import React, { Component } from "react";
import "./homepage.styles.scss";

// homepage components imports are here
import Carousel from "./../../components/carousel/carousel.component";
import AllProducts from "../../components/all-products/all-products.component";
import Sidebar from "./../../components/sidebar/sidebar.component";

class Homepage extends Component {
  state = {
    allProducts2: [],
  };

  componentDidMount() {
    fetch("http://localhost:9000/api/product")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ allProducts2: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="homepage">
        <Carousel />
        <div id="mainBody">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="span9">
                <AllProducts allProducts2={this.state.allProducts2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
