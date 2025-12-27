import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import type { Category } from "./Category";
import type { Book } from "../NewBooks/Book";

import styles from "./TopCategory.module.css";
import { Button } from "@mui/material";

export default function TopCategory() {
  const [books, setBooks] = useState<Book[]>([]);
  const paginationRef = useRef<HTMLDivElement>(null);

  const getCategories = async () => {
    try {
      const res = await axios.get("https://upskilling-egypt.com:3007/api/category");
      const categories: Category[] = res.data || [];
      const allBooks: Book[] = categories
        .flatMap(cat => cat.books || [])
        .filter(book => book.status === "active");

      const booksWithImages = allBooks.map(book => ({
        ...book,
        image:
          book.image && book.image.startsWith("http")
            ? book.image
            : "https://via.placeholder.com/150",
      }));

      setBooks(booksWithImages);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Split books into chunks of 3 per slide
  const chunkBooks = (arr: Book[], size: number): Book[][] => {
    const chunks: Book[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const bookChunks = chunkBooks(books, 3);

  return (
    <div style={{ padding: "40px" }}>
      <h6 className={styles.categoryTitle}>Categories</h6>
      <h2 style={{ color: "darkblue" }}>Explore our Top Categories</h2>

      {books.length === 0 ? (
        <p>No books to display</p>
      ) : (
        <>
          <Swiper
  className={styles.topCategorySwiper}
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }} // just use default bullets
>
  {bookChunks.map((chunk, idx) => (
    <SwiperSlide key={idx}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {chunk.map((book) => (
          <div key={book._id} style={{
            flex: "0 0 25%",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "6px",
            padding: "6px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
          }}>
            <img
              src={book.image}
              alt={book.name}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
            />
            <p style={{ margin: "6px 0 3px", fontSize: "0.8rem" }}>{book.name}</p>
            <p style={{ fontSize: "0.7rem", color: "#555" }}>{book.author}</p>
            <p style={{ fontWeight: "bold", fontSize: "0.75rem" }}>${book.price}</p>
          </div>
        ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>


          {/* Pagination container */}
          <div
            ref={paginationRef}
            className="custom-pagination"
            style={{ marginTop: "20px", textAlign: "center" }}
          />
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Button variant="outlined">View More</Button>
      </div>
    </div>
  );
}
