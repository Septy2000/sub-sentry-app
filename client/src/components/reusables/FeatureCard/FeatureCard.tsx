import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
    return (
        <div className={`${styles.featureCard} ${className || ""}`}>
            <span className={styles.featureIcon}>{icon}</span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
