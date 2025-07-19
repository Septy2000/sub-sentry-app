import styles from "./StatCard.module.scss";

interface StatCardProps {
    number: string;
    label: string;
    className?: string;
}

export default function StatCard({ number, label, className }: StatCardProps) {
    return (
        <div className={`${styles.stat} ${className || ""}`}>
            <span className={styles.statNumber}>{number}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}
