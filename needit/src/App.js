import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//boostrap
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/Register";
import Register from "./pages/SignUp/Register";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header.jsx";
import Profile from "./pages/Profile/Profile";
import ProductPage from "./pages/ProductPage/ProductPage";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          
        </Routes>
      <Footer />
      <Chat /> 
      </BrowserRouter>
      {/* <ProductSlider /> */}
    </div>
  );
}

export default App;
