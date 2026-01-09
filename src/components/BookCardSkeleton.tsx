import styles from '../styles/bookcardSkeleton.module.css'

export const BookCardSkeleton = () => {
  return (
    <div className={styles.bookCard}>
      <div className={styles.imageContainer}>
        {/* Image Skeleton */}
        <div className={styles.imageSkeleton} />
        {/* Favorite Button Skeleton */}
        <div className={styles.favoriteButtonSkeleton} />
      </div>

      <div className={styles.content}>
        <div className={styles.titleSection}>
          {/* Title Skeleton */}
          <div className={styles.titleSkeleton} />
          {/* Author Skeleton */}
          <div className={styles.authorSkeleton} />
        </div>

        <div className={styles.categories}>
          {/* Badge Skeletons */}
          <span className={styles.badgeSkeleton} />
          <span className={styles.badgeSkeleton} />
          <span className={styles.badgeSkeleton} />
        </div>

        <div className={styles.footer}>
          {/* Price Skeleton */}
          <div className={styles.priceSkeleton} />
          {/* Add Button Skeleton */}
          <div className={styles.addButtonSkeleton} />
        </div>
      </div>
    </div>
  );
};