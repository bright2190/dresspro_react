import React from 'react'
// import "./SectionBackgroundImage.scss";
import "./Section.css"
import logo from "../../../src/assets/images/about1.jpg"
import { Policy } from '../Policy/Policy'

const Section = (props) => {

  const mouse_hover = (event)=>{
    event.currentTarget.querySelector(".section_image_hover").style.display = "block"
    console.log("hello")
  }

  const mouse_leave = (event) => {
    event.currentTarget.querySelector(".section_image_hover").style.display = "none"
    console.log("hello");
  };












  let cloth_name = props.cloth_name;
  let cloth_name_unspaced = cloth_name.replace(/\s+/g, "").toLowerCase();
  let number_of_clothes = props.number_of_clothes;
  let cloth_name_lowercase = cloth_name.toLowerCase();
  let number_of_clothes_div = [
  
  ];
  for (let i = 0; i < number_of_clothes; i++){
    number_of_clothes_div.push(
      <div
        class="section_image_container"
        onMouseEnter={mouse_hover}
        onMouseLeave={mouse_leave}
      >
        <div class={"section_image " + cloth_name_unspaced + "_image" + i}>
          <img src={logo}></img>
          <div class="section_image_hover">
            <div class="image_identity">{cloth_name_unspaced + i}</div>
            <div class="buy_now">BUY NOW</div>
          </div>
        </div>
      </div>
    );

  }
  return (
    <div>
      <div class="section_info">
        <div class="section_nav_display">Products &gt; {cloth_name} </div>
        <div class="section_text_display">{cloth_name}</div>
      </div>

      <div class="section_image_section">


        {/* <div class="section_image_container">
          <div class="section_image section_image2">
            <div class="section_image_hover">
              <div class="image_identity">MS10001</div>
              <div class="buy_now">BUY NOW</div>
            </div>
          </div>
        </div> */}
       
        
        {number_of_clothes_div}
      </div>
    </div>
  );
}

export default Section