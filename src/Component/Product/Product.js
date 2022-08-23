import './Product.css'
export default function Product (){
  return (
    
      
      <div class="swiper second-swiper" id="product_section">
        {/* <!-- Additional required wrapper --> */}
        <div class="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div class="swiper-slide second-swiper-slide" id="swiper2-slide0">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="./smocked_tops/smocked_tops.html">Order Now</a></div>
              <div class="down_hover">Smocked Top</div>
            </div>
          </div>

          {/* <!-- SMOCKED TOPS LONG IS RUCHED DRESS --> */}
          <div class="swiper-slide second-swiper-slide" id="swiper2-slide1">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="./ruched_dresses/ruched_dresses.html">Order Now</a></div>
              <div class="down_hover">Ruched Dress</div>
            </div>
          </div>
          <div class="swiper-slide second-swiper-slide" id="swiper2-slide2">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="./wrap_tops/wrap_tops.html">Order Now</a></div>
              <div class="down_hover">Wrap Top</div>
            </div>
          </div>
          <div class="swiper-slide second-swiper-slide" id="swiper2-slide3">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="./mini_skirts/mini_skirts.html">Order Now</a></div>
              <div class="down_hover">Mini Skirt</div>
            </div>
          </div>
          <div class="swiper-slide second-swiper-slide" id="swiper2-slide4">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="./satin_dress_lace/satin_dress_lace.html">Order Now</a></div>
              <div class="down_hover">Satin Dress</div>
            </div>
          </div>
          <div class="swiper-slide second-swiper-slide" id="swiper2-slide5">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="./two_pieces/two_pieces.html">Order Now</a></div>
              <div class="down_hover">Two Piece</div>
            </div>
          </div>

          {/* <!-- EXTRA SLIDE FOR OTHER PRODUCTS --> */}

           
          {/* <!-- <div class="swiper-slide second-swiper-slide" id="swiper2-slide6">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="">Order Now</a></div>
              <div class="down_hover">Ruched Dress</div>
            </div>
          </div> --> */}


          {/* <!-- <div class="swiper-slide second-swiper-slide" id="swiper2-slide7">
            <div class="on_hover_display">
              <div class="middle_hover"><a href="">Order Now</a></div>
              <div class="down_hover">Ruched Dress</div>
            </div>
          </div> --> */}
          
        </div>
        {/* <!-- If we need pagination --> */}
        <div class="swiper-pagination swiper-pagination2"></div>
{/* 
        <!-- If we need navigation buttons --> */}
        <div class="swiper-button-prev swiper-button-prev2"></div>
        <div class="swiper-button-next swiper-button-next2"></div>

        {/* <!-- If we need scrollbar --> */}
        {/* <!-- <div class="swiper-scrollbar"></div> --> */}
      </div>
  )
}