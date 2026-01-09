import Link from "next/link";
import styles from "../styles/homePage.module.css";
import { ArrowRight, Brain, TrendingUp, Zap, Shield } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";
import { BookCard } from "../components/BookCard";
import { books } from "../../data/mockData";
import { Footer } from "../components/Footer";
import { mockUser } from "./layout";


const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Our intelligent algorithm learns from your favorites to suggest books perfectly matched to your taste.',
    },
    {
      icon: TrendingUp,
      title: 'Personalized Experience',
      description: 'The more you favorite, the better our recommendations become. Your profile evolves with your reading journey.',
    },
    {
      icon: Zap,
      title: 'Instant Discovery',
      description: 'Browse thousands of books across 15+ categories with advanced search and filtering.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'All your data is stored locally in your browser. We respect your privacy and reading preferences.',
    },
]
export default function Home() {

  const subsetBooks = books.slice(0,7)


  return (
    <>
      <div className={styles.page}>

          {/* Hero Section*/}
          <section className={styles.main}>
            <div className={styles.container}>
              <div className={styles.hero}>
                <h1>Discover Your Next Great Read</h1>
                <p>Browse thousands of books and get AI-powered recommendations based on your favorites</p>
                <div className={styles.heroButton}>
                  <Link href={'/browse'} className={styles.ctaButton}>
                      Browse Books
                      <ArrowRight />
                  </Link>
                  {!mockUser.session && (
                    <Link href={'/login'} className={styles.ctaButton}>
                      Sign In
                      <ArrowRight />
                  </Link>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section - Only show for non-logged in users */}
          {!mockUser.session && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Why Choose InkStack</h2>
                <p className={styles.sectionSubtitle}>Intelligent book discovery powered by AI</p>
              </div>
              <div className={styles.featuresGrid}>
                {features.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </section> 
          )}

          {/* AI Recommendations Section - Only show if user is logged in and has favorites */}

          {/* Featured Books Section */}
          <section className={styles.section}>
            <div>
              <h2 className={styles.sectionTitle}>Popular Books</h2>
              <p className={styles.sectionSubtitle}>Trending titles everyone is reading</p>
            </div>
            <div className={styles.bookGrid}>
              {/* FIX ME - Map through Books and display as Grid*/}
              {subsetBooks.map((book) => (
                <Link key={book.id} href={`/book/${book.id}`}>
                  <BookCard book={book} />
                </Link>
              ))}
            </div>
            <div className={styles.featureCTA}>
              <Link className={styles.feautreLink}href={'/browse'}>
                View All Books
                <ArrowRight />
              </Link>
            </div>
          </section>

          {/* Call to Action for Non-logged in Users */}          
      </div>
    </>
  );
}
