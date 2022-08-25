import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./Product.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Product(props) {

      let second_layer_hover = props.second_layer_hover;
      let second_layer_hover_remove = props.second_layer_hover_remove;

  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="second-swiper"
      >
        <SwiperSlide
          id="swiper2-slide0"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide1"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide2"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide3"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide4"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide5"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide6"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide7"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          id="swiper2-slide8"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
