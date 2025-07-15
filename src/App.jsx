import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import HomeCarosel from "./components/HomeCarouse";
import Product from "./components/Product";
function App() {
  return (
    <>
      <Header />
      <HomeCarosel />
      {/* <Home /> */}
      <Product/>
      </>
  );
}

export default App;
