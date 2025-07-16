import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import HomeCarosel from "./components/HomeCarouse";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <HomeCarosel />
      <Home />
       <Footer />
      </>
  );
}

export default App;
