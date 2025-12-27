import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import axios from 'axios';
import styles from './NewBook.module.css';
import type { Book } from './Book';

export default function NewBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get("https://upskilling-egypt.com:3007/api/book");
      setBooks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  className={`${styles.roseBg}`} style={{ padding: "40px" }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
            textAlign: "center"
        }}>
            <p>Some quality items</p>
             <h2 style={{color:'darkblue'}}>New Release Books</h2>
        </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}      
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {books.map(book => (
          <SwiperSlide key={book._id}>
  <div className={styles.bookCard}>
    <div className={styles.imageWrap}>
      <img src={book.image} alt={book.name} />
      <div className={styles.addToCart}>
        Add to Cart
      </div>
    </div>
    <p>{book.name}</p>
    <p>{book.author}</p>
    <p>${book.price}</p>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
