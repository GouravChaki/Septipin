import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Slider1 from "../Images/slider1.svg";
import Slider2 from "../Images/slider2.svg";
import Slider3 from "../Images/slider3.svg";
import Slider4 from "../Images/slider4.svg";
import {
  ImageOverlay,
  Overlay,
  SwiperCard,
  SwiperContainer,
  SwiperDesc,
  SwiperName,
} from "./Slider.styles";
function Slider() {
  const data = [
    {
      text1: "WE CARE ABOUT",
      text2: "YOU",
      text3: "& YOURS",
      image: Slider1,
    },
    {
      text1: "WE CARE ABOUT",
      text2: "YOU",
      text3: "& YOURS",
      image: Slider2,
    },
    {
      text1: "WE CARE ABOUT",
      text2: "YOU",
      text3: "& YOURS",
      image: Slider3,
    },
    {
      text1: "WE CARE ABOUT",
      text2: "YOU",
      text3: "& YOURS",
      image: Slider4,
    },
  ];
  return (
    <>
      <div style={{ position: "relative" }}>
        <Overlay>
          <SwiperDesc>WE CARE ABOUT</SwiperDesc>
          <SwiperName>YOU</SwiperName>
          <SwiperDesc>& YOUR&#39;S</SwiperDesc>
        </Overlay>
        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '" style="background-color: white;"></span>'
                );
              },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={800}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperCard image={item.image}></SwiperCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </div>
      <ImageOverlay />
    </>
  );
}

export default Slider;
