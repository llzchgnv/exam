import Banner from "./components/Banner/Banner";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Slider />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
