import Link from "next/link"
import { BookOpen, Home, BookMarked, Heart, ShoppingCart, User } from 'lucide-react'
import style from "../styles/header.module.css"

const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/browse', label: 'Browse', icon: BookMarked },
    { to: '/favorites', label: 'Favorites', icon: Heart },

];

export const Header = ({user}) => {
    return (
        <header className={style.container}>
            <div className={style.headerContent}>
                <div className={style.leftSection}>
                    <Link href={'/'} className={style.logoLink}>
                        <BookOpen />
                        <span>Inkstack</span>
                    </Link>

                    <nav className={style.navigation}>
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <Link key={link.to} href={link.to} className={style.navLink}>
                                    <Icon />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <div className={style.rightSection}>
                    <Link href={'/cart'} className={style.iconLink}>
                        <ShoppingCart />
                    </Link>
                    <Link href={'/profile'} className={style.iconLink}>
                        <User />
                    </Link>
                </div>
            </div>
        </header>
    )
}



