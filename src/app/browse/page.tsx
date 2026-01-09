'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookCard } from "../../components/BookCard";
import { BookCardSkeleton } from "../../components/BookCardSkeleton";
import { categories, books } from "../../../data/mockData";
import styles from "../../styles/browse.module.css"



export default function Browse() {
    const [allProducts, setAllProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: 'all',
        sortBy: 'popularity'
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const PRODUCTS_PER_PAGE = 24;
    const SKELETON_COUNT = 24;
    

   useEffect(() => {
    async function getAllBooks() {
        const url = 'http://localhost:3000/api/books/'

        try {
            setIsLoading(true);
            const response = await fetch(url);

            if(!response.ok) {
                console.log(`Http error: Status: ${response.status}`)
            }

            const data = await response.json();
            console.log(data.books)

            setAllProducts(data.books)
        } catch (error) {
            console.log(`Error: ${error}`)
            setAllProducts([])
        } finally {
            setIsLoading(false)
        }
    }

    getAllBooks()
}, [])

    // // Search call function
    // const handleSearchSubmit = async () => {
    //     if(!searchTerm.trim()) return; 

    //     setIsLoading(true);
    //     const baseURL = 'http://localhost:3000/api/books'

    //     const url = `${baseURL}?author=${encodeURIComponent(searchTerm)}`
    //     try {
    //         const response = await fetch(url);
    //         if(!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`)
    //         }
    //         const data = await response.json()
    //         console.log(data)
            
    //          // ENSURE WE ALWAYS SET AN ARRAY
    //         if (Array.isArray(data)) {
    //             setAllProducts(data);
    //         } else if (data.books && Array.isArray(data.books)) {
    //             setAllProducts(data.books);
    //         } else if (data.data && Array.isArray(data.data)) {
    //             setAllProducts(data.data);
    //         } else {
    //             console.error('API did not return an array:', data);
    //             setAllProducts([]); // Set empty array instead of the bad data
    //         }

    //         setCurrentPage(1);
    //     } catch (error) {
    //         console.log(`Error: ${error}`)
    //         setAllProducts(books)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }


    // Filter function
    const matchesFilters = (product, filters) => {
    // Category filter
    if (filters.category !== 'all') {
        const categoryNames = Array.isArray(product.categories) 
            ? product.categories.map(cat => cat.name) 
            : [];
        console.log('Product Categories:', categoryNames);
        
        if (!categoryNames.includes(filters.category)) {
            return false;
        }
    }
    
    return true;
};

    // Sort function
    const sortProducts = (products, sortBy) => {
        const sorted = [...products]; // Create a copy to avoid mutating original
        
        switch (sortBy) {
            case 'popularity':
            // Assuming products have a 'popularity' or 'salesCount' field
            return sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
            
            case 'title':
            return sorted.sort((a, b) => 
                a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
            );
            
            case 'author':
            return sorted.sort((a, b) => 
                a.author.localeCompare(b.author, undefined, { sensitivity: 'base' })
            );
            
            case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
            
            case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
            
            default:
            return sorted;
        }
    };

    // Apply filters and sorting
    const filteredProducts = (Array.isArray(allProducts) ? allProducts: []).filter(product => 
        matchesFilters(product, filters)
    );

    const sortedProducts = sortProducts(filteredProducts, filters.sortBy);

    // Paginate
    const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const paginatedProducts = sortedProducts.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    // Handler functions
    const handleCategoryChange = (categoryId) => {
        setFilters(prev => ({ ...prev, category: categoryId }));
        setCurrentPage(1); // Reset to page 1 when filters change
    };

    const handleSortChange = (e) => {
        setFilters(prev => ({ ...prev, sortBy: e.target.value }));
        setCurrentPage(1); // Reset to page 1 when sort changes
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // const handleInputChange = (e) => {
    //     setSearchTerm(e.target.value)
    // }


    return (
        <div className={styles.section}>
            <div>
                <h1>Browse Books</h1>
                <p>Explore our complete collection</p>
            </div>
            <div className={styles.searchContainer}>
                <input className={styles.searchInput} placeholder="Search by title or author" />
                <button className={styles.btn}>Search</button>
            </div>
            {/*Filter by Category and Sort by price, author, etc */}
            <div className={styles.filterSort}>
                <div className={styles.filter}>
                    <label htmlFor="category">Categories</label>
                    <select id="category" name="Category" value={filters.category} onChange={(e) =>handleCategoryChange(e.target.value)}>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>

                </div>
                <div className={styles.sort}>
                    <label>Sort by:</label>
                    <select value={filters.sortBy} onChange={handleSortChange}>
                        <option value="popularity">Popularity</option>
                        <option value="title">Title (A-Z)</option>
                        <option value="author">Author (A-Z)</option>
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                    </select>
                </div>
            </div>
            <div>
                <p>Showing {sortedProducts.length} books</p>
                <div className={styles.booksGrid}>
                    {/*Books Grid showing n books*/}
                    {isLoading ? (
                        Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                            <BookCardSkeleton key={`skeleton-${index}`} />
                        ))
                    ): (
                        paginatedProducts.map((book) => (
                            <Link key={book.id} href={`/book/${book.id}`}>
                                <BookCard book={book} />
                            </Link>
                        ))

                    )}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className={styles.paginationContainer}>
                        <button 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.paginationBtn}
                        >
                            Previous
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={styles.paginationBtn}
                            >
                                {page}
                            </button>
                        ))}
                        
                        <button 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={styles.paginationBtn}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}