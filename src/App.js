import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';




// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

// import { setCurrentUser } from './redux/user/user.actions';
// import { selectCurrentUser } from './redux/user/user.selectors';


// all components imports are here 
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage/homepage.component';
import Mainpage from './pages/mainpage/mainpage.component';
import ProductDetail from './pages/products-details-page/products-detail.page';
import CartPage from './pages/cartpage/cartpage.component';
import LoginPage from './pages/loginpage/loginpage.component';
import RegistrationPage from './pages/registrationpage/registrationpage.component';



class App extends React.Component {



  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/main-page' component={Mainpage} />
          <Route exact path='/product-detail' component={ProductDetail} />
          <Route exact path='/mycart' component={CartPage} />
          <Route exact path='/login-signup' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<LoginPage />)} />
          <Route exact path='/register' component={RegistrationPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;








// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Switch>
//         <Route exact path ='/' component={Homepage} />
//         <Route exact path ='/main-page' component={Mainpage} />
//         <Route exact path ='/product-detail' component={ProductDetail} />
//         <Route exact path ='/mycart' component={CartPage} />
//         <Route exact path ='/login-signup' component={LoginPage} />
//         <Route exact path ='/register' component={RegistrationPage} />
//       </Switch>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
