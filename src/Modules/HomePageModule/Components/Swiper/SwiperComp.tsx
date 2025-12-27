import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from './SwiperComp.module.css';
import Button from '@mui/material/Button';

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function SwiperComp() {
  return (
    <Swiper 
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div  className={`${styles.slideContent} ${styles.roseBg}`}>
          <div className={styles.slideText}>
            <h1 style={{color:'darkblue'}}>ipsum dolor si</h1>
            <p style={{color:'darkblue'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, 
            </p>
            <p style={{color:'darkblue'}} >
              libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
            </p>
          <Button variant="outlined">READ MORE</Button>
          </div>
          <img src="images/book.png" alt="Book" />
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className={`${styles.slideContent} ${styles.roseBg}`}>
          <div className={styles.slideText}>
            <h3 style={{color:'darkblue'}}>Book Title One</h3>
            <p style={{color:'darkblue'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit expedita repellendus nulla,
               mollitia laboriosam necessitatibus vel. Rem, doloribus hic?
            </p>
          </div>

          <img src="images/book2.png" alt="Book" />
        </div>
     </SwiperSlide>

      {/* <SwiperSlide><img style={{width : '20%'}} src="images/book3.png" alt="" /></SwiperSlide>
      <SwiperSlide><img style={{width : '20%'}} src="images/book4.jpg" alt="" /></SwiperSlide> */}
     
    </Swiper>
  )
}
