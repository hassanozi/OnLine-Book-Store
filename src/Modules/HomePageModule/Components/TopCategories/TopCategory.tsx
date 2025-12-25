import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import type { Book } from './Book';
import styles from './TopCategory.module.css';
export default function TopCategory() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
      getBooks();
    }, []);

    const getBooks = async () => {
        try {
        const response = await axios.get(
            "https://upskilling-egypt.com:3007/api/book"
        );
        setBooks(response.data.data); 
        } catch (error) {
        console.log(error);
        }
    };

 return (
    <div style={{ padding: "40px" }}>
            <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={15}
  slidesPerView={6}
  breakpoints={{
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 6 }
  }}
>
  {books.map(book => (
    <SwiperSlide key={book._id}>
      <div className={styles.bookCard}>
        <img src={book.image} alt={book.name} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
}

