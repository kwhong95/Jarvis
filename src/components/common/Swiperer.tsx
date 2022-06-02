// Core modules imports are ame as usual
import { Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  children: React.ReactNode;
}

const Swiperer: React.FC<Props> = ({ children }) => {
  const slides = [];

  for (let i = 0; i < 2; i++) {
    slides.push(<SwiperSlide key={i}>{children}</SwiperSlide>);
  }

  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {slides}
    </Swiper>
  );
};

export default Swiperer;
