import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import arrow from "../Images/arrow.svg";
import {
  SwiperContainer,
  SwiperCard,
  SwiperName,
  SwiperDesc,
  StyledHeader,
  StyledImg,
} from "./Testimonials.styles";
const Testimonials = () => {
  const data = [
    {
      name: "Embrace the Joyful Journey",
      desc: "In the grand tapestry of pregnancy, every day is a thread of joy and wonder. Embrace each moment with gratitude, weaving a harmonious melody for a healthy and joy-filled experience.",
      color: "#FFF",
      background: "#D06262",
    },
    {
      name: "Nourish the Miracle Within",
      desc: "As you traverse the miraculous landscape of pregnancy, remember to nourish not just your body but your mind and spirit. Your well-being is the fertile soil for the exquisite growth of your baby's journey into life.",
      color: "#AB2D2D",
      background: "#FBBEBE",
    },
    {
      name: "Dance of Pregnancy Wellness",
      desc: "Let your health take the lead in the intricate dance of pregnancy. Listen to the whispers of your body, gracefully rest when needed, and savor the enchanting cadence of this extraordinary journey into motherhood.",
      color: "#FFF",
      background: "#C2185B",
    },
    {
      name: "Harmony of Well-Being",
      desc: "Within the symphony of pregnancy, wellness is the sweetest note you play for yourself and your baby. Move with the rhythm of self-care, indulge in the nourishment of nutritious foods, and surround yourself with the uplifting chords of positivity for a harmonious and thriving pregnancy.",
      color: "#FFF",
      background: "#D06262",
    },
    {
      name: "Transformative Glow",
      desc: "Pregnancy is a metamorphic journey. Prioritize self-care as you metamorphose, connect with the inner strength burgeoning within you, and let the radiant glow of well-being permeate every fiber of your being.",
      color: "#AB2D2D",
      background: "#FBBEBE",
    },
    {
      name: "Breath of Love and Peace",
      desc: "In the gentle ebb and flow of each breath, discover the serenity that envelops you. Your body, a vessel of creation, breathes in love, exhaling peace, surrounded by the tender cocoon of a mother's embrace.",
      color: "#FFF",
      background: "#C2185B",
    },
    {
      name: "Sanctuary of Calmness",
      desc: "Close your eyes, surrender to the warmth of your baby's presence, and release any lingering tension. Within the cocoon of motherhood, find solace and tranquility, as calmness becomes your sacred sanctuary.",
      color: "#FFF",
      background: "#D06262",
    },
    {
      name: "Garden of Serenity",
      desc: "As you rest, cultivate a lush garden of serenity within. Each inhale, a blossoming of peace; each exhale, a gentle release of worries. Your body, a sanctuary, becomes the bedrock of calmness and strength.",
      color: "#AB2D2D",
      background: "#FBBEBE",
    },
  ];
  return (
    <SwiperContainer>
      <div className="innerHeader">Quotes</div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={700}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          }
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperCard background={item.background}>
              <StyledHeader>
                <SwiperName color={item.color}>{item.name}</SwiperName>
                <StyledImg>
                  <img src={arrow} height="100%" width="100%" />
                </StyledImg>
              </StyledHeader>
              <SwiperDesc color={item.color}>{item.desc}</SwiperDesc>
            </SwiperCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default Testimonials;
