import { React, useEffect, useState } from "react";
import Header from "../src/components/Header/Header";
import About from "../src/components/About/About";
import Loader from "./components/Loader/loader";
import Navigation from "./components/Navigation/Navigation";
import List from "../src/components/Events/List";
import Tlist from "./components/Tlist/Tlist";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Eventdetails from "./components/EventDetails/Eventdetails";
import "aos/dist/aos.css";
import Aos from "aos";
const App = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    Aos.init({ easing: "ease", duration: 700 });
  });
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  });
  return (
    // <div>
    //   {loader ? (
    //     <Loader />
    //   ) : (
    //     <>
    //       <Navigation />
    //       <Header />
    //       <About />
    //       <List />
    //       <Tlist />
    //       <Testimonials /> <Footer />
    //     </>
    //   )}
    // </div>

    <Eventdetails />
  );
};

export default App;
