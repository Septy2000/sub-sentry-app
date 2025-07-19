import styles from "./StepCard.module.scss";

interface StepCardProps {
    number: number;
    title: string;
    description: string;
    className?: string;
}

export default function StepCard({ number, title, description, className }: StepCardProps) {
    return (
        <div className={`${styles.step} ${className || ""}`}>
            <div className={styles.stepNumber}>{number}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
