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
                { label: "Features", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Security", href: "#" },
                { label: "Mobile App", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
                { label: "Blog", href: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { label: "Help Center", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "API Docs", href: "#" },
                { label: "Status", href: "#" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "GDPR", href: "#" },
            ],
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
