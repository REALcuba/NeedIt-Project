import logo from "./img/NeedIt.gif";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import Header from "./components/Header/Header.jsx";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import CategorieSlider from "./components/CathegoriesSlider/CategoriesSlider";

function App() {
  return (
    <div className="App">
      
        <Header />
      
        <section className="body-product">
          <img src={logo} className="App-logo" alt="logo" />

          <ProductSlider />
        </section>
        <CategorieSlider />
     
        
      {/* <footer/> */}
    </div>
  );
}

export default App;
