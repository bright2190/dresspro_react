import "./SpaceAtTheSide.css";
import { Route, Routes } from "react-router-dom";


import Navbar from "../Navbar/Navbar";

export default function SpaceAtTheSide() {

  function navbar_toggler(){
        document.getElementsByClassName("links_div")[0].classList.toggle("show");
  }




  return (
    <>
      <div class="space_at_the_side">
        <Navbar navbar_togglerProps={navbar_toggler}/>
      </div>
    </>
  );
}
