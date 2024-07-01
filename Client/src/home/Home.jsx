import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Banner1 from "../components/Banner1";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Banner1/> */}
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
