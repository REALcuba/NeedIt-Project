// import logo from "./img/NeedIt.gif";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";

//testing boostrap login
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

// components
import Header from "./components/Header/Header.jsx";
// import ProductSlider from "./components/ProductSlider/ProductSlider";
import CategorieSlider from "./components/CathegoriesSlider/CategoriesSlider";
import SearchSection from "./components/SearchSection/SearchSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/app' exact element={<App/>}/>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <SearchSection />
      <CategorieSlider />
      <Footer />
      {/* <section className="body-product">
          <img src={logo} className="App-logo" alt="logo" />

          </section>
          
        */}
      {/* <ProductSlider /> */}
    </div>
  );
}

export default App;
