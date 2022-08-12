
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function RouteIf (){

    return (
        <Router>
          <Header />
          <Routes>

            {/* Main Page routes */}

            <Route exact path="/" element='Home Page Folder'></Route>            
                  
            <Route exact path="/OrderNow" element='Cart Folder'></Route>  

            <Route exact path="/AboutUs" element='AboutUs Page'></Route>
              
            <Route exact path="/CreateDesign/:url"element=''></Route>

            {/* Main Page routes */}




            {/* Admin Page routes */}

            <Route path='/Admin/ManageDesigns/:id' element=''></Route>

            <Route exact path="/Admin/ManageEmployees/:id" element=''></Route>

            <Route exact path="/Admin/Profile" element=''></Route>

            <Route exact path="/Admin" element=''></Route>


            {/* Admin Page routes */}



                
          </Routes>
          <Footer />
        </Router>
    )
}