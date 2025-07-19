import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    className,
    titleClassName,
    subtitleClassName,
}: SectionHeaderProps) {
    return (
        <div className={`${styles.sectionHeader} ${className || ""}`}>
            <h2 className={`${styles.sectionTitle} ${titleClassName || ""}`}>{title}</h2>
            {subtitle && (
                <p className={`${styles.sectionSubtitle} ${subtitleClassName || ""}`}>{subtitle}</p>
            )}
        </div>
    );
}
