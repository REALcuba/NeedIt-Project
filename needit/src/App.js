import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//boostrap
import "bootstrap/dist/css/bootstrap.min.css";

// components
import SignUp from "./components/SignUp/Register";
import Register from "./components/SignUp/Register";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header.jsx";
import ProductPage from "./components/ProductPage/ProductPage";
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Register />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
<Footer/>
      {/* <ProductSlider /> */}
    </div>
  );
}

export default App;