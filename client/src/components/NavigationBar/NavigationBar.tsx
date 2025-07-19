import { useState, useEffect } from "react";
import Button from "../reusables/Button/Button";
import styles from "./NavigationBar.module.scss";

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${className || ""}`}
        >
            <div className={styles.navContainer}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoIcon}>🛡️</span>
                    SubSentry
                </a>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                    <ul className={styles.navLinks}>
                        <li>
                            <a href="#features" onClick={() => handleNavClick("features")}>
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#how-it-works" onClick={() => handleNavClick("how-it-works")}>
                                How It Works
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" onClick={() => handleNavClick("pricing")}>
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => handleNavClick("contact")}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <Button size="sm" className={styles.ctaButton}>
                    Get Started Free
                </Button>

                <button
                    className={styles.mobileMenuToggle}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    ☰
                </button>
            </div>
        </header>
    );
}
