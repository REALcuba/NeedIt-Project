import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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
import About from "./components/About/About";
import Chat from "./components/Chat/Chat";


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
          <Route path="/about" element={<About />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          
        </Routes>
      <Footer />
      </BrowserRouter>
      {/* <ProductSlider /> */}
 <Chat /> 
    </div>
  );
}

export default App;
