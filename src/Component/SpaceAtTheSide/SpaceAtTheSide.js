import "./SpaceAtTheSide.css";
import { Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import Specific from "../Specific/Specific";

import Navbar from "../Navbar/Navbar";
import SecondLayer from "../SecondLayer/SecondLayer";
import Product from "../Product/Product";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import CustomerReview from "../CustomerReview/CustomerReview";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import  {Policy}  from "../Policy/Policy";

export default function SpaceAtTheSide() {

  function navbar_toggler(){
        document.getElementsByClassName("links_div")[0].classList.toggle("show");
  }
  







  return (
    <>
      <div class="space_at_the_side">
        <Navbar navbar_togglerProps={navbar_toggler} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/customer" element={<CustomerReview />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
