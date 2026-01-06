import { LucideIcon } from "lucide-react"
import styles from '../styles/featurecard.module.css'
interface FeatureCardProps {
    icon: LucideIcon,
    title: string,
    description: string,
}

export function FeatureCard({icon: Icon, title, description}: FeatureCardProps) {
    return (
        <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
                <Icon className={styles.icon} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}