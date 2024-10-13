import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Product";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimoni from "./components/Testimoni/Testimoni";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  React.useEffect(( ) => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  

  return (

    <div className="bg-white dark:bg-gray-900 dark:text-white duration:200">
      <Navbar />
      <Hero />
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimoni/>
      <Footer/>
    </div>
  );
}

export default App;
