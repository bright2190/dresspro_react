import "./SpaceAtTheSide.css";
import { Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';


import Navbar from "../Navbar/Navbar";
import SecondLayer from "../SecondLayer/SecondLayer";
import Product from "../Product/Product";

export default function SpaceAtTheSide() {

  function navbar_toggler(){
        document.getElementsByClassName("links_div")[0].classList.toggle("show");
  }

  // let noOfSwiperTwoDivs = document.getElementsByClassName(
  //   "second-swiper-slide"
  // ).length;
  // alert(noOfSwiperTwoDivs);

  // for (let i = 0; i < noOfSwiperTwoDivs; i++) {
  //   let currentSlide = document.getElementsByClassName("second-swiper-slide")[
  //     i
  //   ];
  //   currentSlide.addEventListener("mouseover", function () {
  //     document.getElementsByClassName("on_hover_display")[i].style.display =
  //       "block";
  //       // alert("debe")
  //   });
  //   currentSlide.addEventListener("mouseleave", function () {
  //     document.getElementsByClassName("on_hover_display")[i].style.display =
  //       "none";
  //   });
  // }

  function second_layer_hover(event){
    // event.currentTarget.style.backgroundColor = "yellow";
    event.currentTarget.querySelector(".on_hover_display").style.display = "block";
    
    
  }
  function second_layer_hover_remove(event) {
    // event.currentTarget.style.backgroundColor = "yellow";
    event.currentTarget.querySelector(".on_hover_display").style.display = "none";
  }







  return (
    <>
      <div class="space_at_the_side">
        <Navbar navbar_togglerProps={navbar_toggler} />
        <SecondLayer />
        <Product
          second_layer_hover={second_layer_hover}
          second_layer_hover_remove={second_layer_hover_remove}
        />
      </div>
    </>
  );
}
