"use client"

import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import styles from '../styles/bookcard.module.css'

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  price: number;
  categoryIds: string[];
  popularity: number;
  publishedYear: number;
}

interface BookCardProps {
  book: Book;
}



export const BookCard = ({book}: BookCardProps) => {

    const addToCart = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Added to Cart")
    }
    return (
        <div className={styles.bookCard}>
            <div className={styles.imageContainer}>
                {/*Image and Heart/Favorite Button */}
                <Image 
                    src={book.coverImageUrl}
                    alt={book.title}
                    className={styles.image}
                    width={100}
                    height={100}
                />
            </div>

             <div className={styles.content}>
                <div className={styles.titleSection}>
                    {/* title section*/}
                    <h3 className={styles.title}>{book.title}</h3>
                    <p className={styles.author}>{book.author}</p>
                </div>

                <div className={styles.categories}>
                    {/* Badge section  <= 3 badges */}
                    <span>{book.categoryIds[0]}</span>
                    <br/>
                    <span>{book.categoryIds[1]}</span>
                </div>

                <div className={styles.footer}>
                    {/*Price of book and add to cart  */}
                    <span className={styles.price}>${book.price}</span>
                    <button className={styles.addButton} onClick={addToCart}>
                        <ShoppingCart />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}