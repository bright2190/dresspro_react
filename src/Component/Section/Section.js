import React from 'react'
import "./Section.css"
import "./SectionBackgroundImage.scss"
import { Policy } from '../Policy/Policy'

const Section = (props) => {

  const mouse_hover = (event)=>{
    event.currentTarget.querySelector(".mini_skirts_image_hover").style.display = "block"
    // alert("hi")

    console.log("hello")
  }

  const mouse_leave = (event) => {
    event.currentTarget.querySelector(".mini_skirts_image_hover").style.display = "none"
    // alert("hi")

    console.log("hello");
  };











  let cloth_name = props.cloth_name;
  let number_of_clothes = props.number_of_clothes;
  let cloth_name_lowercase = cloth_name.toLowerCase();
  let number_of_clothes_div = [
    <div class="mini_skirts_image_container" onMouseEnter={mouse_hover} onMouseLeave={mouse_leave}>
      <div class="mini_skirts_image">
        <div class="mini_skirts_image_hover">
          <div class="image_identity">MS10001</div>
          <div class="buy_now">BUY NOW</div>
        </div>
      </div>
    </div>
  ];
  for (let i = 0; i < number_of_clothes; i++){
    number_of_clothes_div.push(
      <div class="mini_skirts_image_container">
        <div class="mini_skirts_image">
          <div class="mini_skirts_image_hover">
            <div class="image_identity">MS10001</div>
            <div class="buy_now">BUY NOW</div>
          </div>
        </div>
      </div>
    );

  }
  return (
    <div>
      
      <div class="mini_skirts_info">
        <div class="mini_skirts_nav_display">Products {cloth_name} </div>
        <div class="mini_skirts_text_display">MINI SKIRTS</div>
      </div>

      <div class="mini_skirts_image_section">
        <div class="mini_skirts_image_container">
          <div class="mini_skirts_image">
            <div class="mini_skirts_image_hover">
              <div class="image_identity">MS10001</div>
              <div class="buy_now">BUY NOW</div>
            </div>
          </div>
        </div>
        <div class="mini_skirts_image_container">
          <div class="mini_skirts_image">
            <div class="mini_skirts_image_hover">
              <div class="image_identity">MS10001</div>
              <div class="buy_now">BUY NOW</div>
            </div>
          </div>
        </div>
        <div class="mini_skirts_image_container">
          <div class="mini_skirts_image">
            <div class="mini_skirts_image_hover">
              <div class="image_identity">MS10001</div>
              <div class="buy_now">BUY NOW</div>
            </div>
          </div>
        </div>
        {number_of_clothes_div}
      </div>

    </div>

  )
}

export default Section