
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./components/homePage/MainPage";
import LogIn from "./components/admin/LogIn";
import ManageDesigns from "./components/admin/ManageDesigns";
import ManageOrders from "./components/admin/ManageOrders";
import Profile from "./components/admin/Profile";
import AboutUs from "./components/AboutUs";
import CreateOwnDesign from "./components/CreateOwnDesign/CreateOwnDesign";
import Cart from "./components/Cart/Cart";
import ClickedCard from "./components/homePage/ClickedCard";
import UpdateDesign from "./components/admin/UpdateDesign";


export default class RouteIf extends Component{
  constructor(props){
    super(props);
    this.state = {
      Auth: false // true if admin is logged in
    };
  }

  getAdmin = (islogged) => {
      this.setState({Auth: islogged});
        console.log('in App.js', this.state.Auth);
    }
    render(){

      return (
          <Router>
            <Header Admin={this.state.Auth} onClick={this.getAdmin}/>
            <Routes>

              {/* Main Page routes */}
  
              <Route exact path="/" element={<MainPage  />}></Route>     

              <Route exact path="/CLickedCard/:id" element={<ClickedCard  />}></Route>            

              <Route exact path="/OrderNow" element={<Cart />}></Route>  
  
              <Route exact path="/AboutUs" element={<AboutUs />}></Route>
                

              <Route exact path="/CreateDesign"element={<CreateOwnDesign />}></Route>
  
              {/* Main Page routes */}
              {!this.state.Auth&&(
              <Route exact path="/Admin" element={<LogIn onSubmit={this.getAdmin} />}></Route>
              )}
  
              {/* Admin Page routes */}
  
              {this.state.Auth&&(
  
                <>
                <Route exact path="/Admin" element={<ManageDesigns onSubmit={this.getAdmin} />}></Route>

                {/* added the main rout for the manage designs, and kept the /:id for later to work on */}
                {/* <Route path='/Admin/ManageDesigns' element={<ManageDesigns />}></Route> */}
    
                <Route path='/Admin/:id' element=''></Route>
    
                {/* added the main rout for the manage employees, and kept the /:id for later to work on */}
                <Route exact path="/Admin/ManageOrders" element={<ManageOrders />}></Route>
    
                <Route exact path="/Admin/ManageEmployees/:id" element=''></Route>
    
                <Route exact path="/Admin/Profile" element={<Profile />}></Route>

                <Route path='Admin/editDesign/:id' element={<UpdateDesign />}></Route>
                
                </>  
  
              )
              }
  
  
              {/* Admin Page routes */}
  
  
  
                  
            </Routes>
            <Footer />
          </Router>
      )

    }
}