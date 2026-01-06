import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';
import Link  from 'next/link';
import styles from '../styles/footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.section}>
            <div className={styles.logo}>
              <BookOpen className={styles.logoIcon} />
              <span className={styles.logoText}>InkStack</span>
            </div>
            <p className={styles.description}>
              Discover your next great read with AI-powered book recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href={'/browse'} className={styles.link}>
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href={'/favorites'} className={styles.link}>
                  My Favorites
                </Link>
              </li>
              <li>
                <Link href={"/cart"} className={styles.link}>
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Account</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href={'/login'} className={styles.link}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link href={'/profile'} className={styles.link}>
                  My Profile
                </Link>
              </li>
              <li>
                <Link href={'/orders'} className={styles.link}>
                  Order History
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <Github className={styles.socialIcon} />
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <Twitter className={styles.socialIcon} />
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} InkStack. Built as a portfolio demonstration project.</p>
          <p className={styles.bottomText}>
            This is a demo application. No real transactions are processed.
          </p>
        </div>
      </div>
    </footer>
  );
}
