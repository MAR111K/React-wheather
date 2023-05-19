import React from "react";
import CityItem from "../CityItem/CityItem";
import { useAppSelector } from "../../store";
//@ts-ignore
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CitiesSwiper.scss";

const CitiesSwiper = () => {
  const cities = useAppSelector((state) => state.city.cities);

  return (
    <React.Fragment>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        navigation={false}
        breakpoints={{
          1440: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 4,
          },
          999: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          350: {
            slidesPerView: 1,
          },
        }}
        className="swiper-cities"
      >
        {cities.map((item, index) => (
          <SwiperSlide>
            <CityItem item={item} index={index} />
            <div className="main-page-cards__item" key={index}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default CitiesSwiper;
