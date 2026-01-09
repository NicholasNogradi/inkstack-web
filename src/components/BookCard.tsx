"use client"

import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import styles from '../styles/bookcard.module.css'

interface Category {
    id: string;
    name: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  description: string | null;
  coverImage: string;
  price: number;
  categories: Category[];
}

interface BookCardProps {
  book: Book;
}

export const BookCard = ({book}: BookCardProps) => {
    // Debug logging
    console.log('Book object:', book);
    console.log('Cover image:', book?.coverImage);
    console.log('Cover image type:', typeof book?.coverImage);

    const addToCart = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Added to Cart")
    }

    const displayCategories = book?.categories ? book.categories.slice(0, 3) : [];
    
    // Ensure coverImage is a valid string
    const coverImage = book?.coverImage && typeof book.coverImage === 'string' 
        ? book.coverImage 
        : '/placeholder-book.jpg';

    return (
        <div className={styles.bookCard}>
            <div className={styles.imageContainer}>
                {/* Conditional rendering to prevent errors */}
                {coverImage && coverImage !== '/placeholder-book.jpg' ? (
                    <Image
                        src={coverImage}
                        alt={book?.title || 'Book cover'}
                        className={styles.image}
                        width={200}
                        height={300}
                        unoptimized
                    />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <p>No Image</p>
                    </div>
                )}
            </div>

             <div className={styles.content}>
                <div className={styles.titleSection}>
                    <h3 className={styles.title}>{book?.title}</h3>
                    <p className={styles.author}>{book?.author}</p>
                </div>

                <div className={styles.categories}>
                    {displayCategories.map((category) => (
                        <span key={category.id} className={styles.badge}>
                            {category.name}
                        </span>
                    ))}
                </div>

                <div className={styles.footer}>
                    <span className={styles.price}>
                        ${book?.price ? book.price.toFixed(2) : '0.00'}
                    </span>
                    <button className={styles.addButton} onClick={addToCart}>
                        <ShoppingCart />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}