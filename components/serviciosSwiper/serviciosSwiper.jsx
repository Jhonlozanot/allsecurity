import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./serviciosSwiper.module.css";

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const ServiciosSwiper = (props) => {
  return (
    <>
      <section>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          className={styles.swiper}
          pagination={{ clickable: true }}
          spaceBetween={0}
          loop={true}
          speed={1500}
          autoplay={{ delay: 2000 }}
        >
          {props.servicios.map((servicio) => (
            <SwiperSlide key={servicio.id} className={styles.swiperItem}>
              <img src={servicio.image} alt="" />
              <div className={styles.sociales}>
                <img src="/images/svg/facebook.svg" alt="" />
                <img src="/images/svg/linkedin.svg" alt="" />
              </div>
              <div className={styles.title}>
                <h2>{servicio.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ServiciosSwiper;
