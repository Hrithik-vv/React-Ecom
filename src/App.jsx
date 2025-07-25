import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import HomeCarosel from "./components/HomeCarouse";
import Footer from "./components/footer";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<><HomeCarosel/> <Home/></>}/>
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
