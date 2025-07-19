import { FooterSection } from "@/types/common";
import styles from "./Footer.module.scss";

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    const footerSections: FooterSection[] = [
        {
            title: "Product",
            links: [
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
            ],
        },
        {
            title: "Support",
            links: [{ label: "Contact", href: "#contact" }],
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${styles.footer} ${className || ""}`}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {footerSections.map((section, index) => (
                        <div key={index} className={styles.footerSection}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} SubSentry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
