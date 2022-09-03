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
import Section from "../Section/Section";
import  {Policy}  from "../Policy/Policy";

export default function SpaceAtTheSide() {

  function navbar_toggler(){
        document.getElementsByClassName("links_div")[0].classList.toggle("show");
  }

  let cloth_categories = [
    "SMOCKED TOPS",
    "RUCHED DRESSES",
    "WRAP TOPS",
    "MINI SKIRTS",
    "SATIN DRESSES",
    "TWO PIECES",
    
  ];

  let cloth_categories_number = [25, 26, 36, 30, 32, 30]

  let cloth_route =  cloth_categories.map((cloth_name, index) =>{
    let cloth_name_id = cloth_name.replace(/\s+/g, "").toLowerCase();
    let number_of_clothes = cloth_categories_number[index]
    return (
          <Route path={"/" + cloth_name_id} element={<Section cloth_name={cloth_name} number_of_clothes={number_of_clothes}/>}></Route>

    )
  })

  







  return (
    <>
      <div class="space_at_the_side">
        <Navbar navbar_togglerProps={navbar_toggler} />
        <Routes>
          {cloth_route}
          <Route path="/" element={<Home cloth_categories={cloth_categories}  />}></Route>
          <Route path="/customer" element={<CustomerReview />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
