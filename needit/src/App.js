// import logo from "./img/NeedIt.gif";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//boostrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
// components
import Header from "./components/Header/Header.jsx";
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
        
        </Routes>
      </BrowserRouter>
      <Footer/>
     
      {/* <ProductSlider /> */}
    </div>
  );
}

export default App;
