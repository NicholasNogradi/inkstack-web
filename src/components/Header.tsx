import Link from "next/link"
import { BookOpen, Home, BookMarked, Heart, ShoppingCart, User, LogIn } from 'lucide-react'
import style from "../styles/header.module.css"
import type { UserType } from "../types/types"



export const Header = (user: UserType) => {
    return (
        <header className={style.container}>
            <div className={style.headerContent}>
                <div className={style.leftSection}>
                    <Link href={'/'} className={style.logoLink}>
                        <BookOpen />
                        <span>Inkstack</span>
                    </Link>

                    <nav className={style.navigation}>
                        <Link href={'/'} className={style.navLink}>
                            <Home />
                            Home
                        </Link>
                        <Link href={'/browse'} className={style.navLink}>
                            <BookMarked />
                            Browse
                        </Link>
                        {user.session && (
                            <Link  href={'/favorites'} className={style.navLink}>
                                <Heart />
                                Favorites
                            </Link>
                        )}
                    </nav>
                </div>
                <div className={style.rightSection}>
                    {user.session ? (
                        <div className={style.rightSectionLinks}>
                            <Link href={'/cart'} className={style.iconLink}>
                                <ShoppingCart />
                            </Link>
                            <Link href={'/profile'} className={style.iconLink}>
                                <User />
                            </Link>
                        </div>

                    ) : (
                        <div className={style.rightSectionLinks}>
                            <Link href={'/login'}>
                                <LogIn className={style.iconLink}/>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}



