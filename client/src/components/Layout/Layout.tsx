import { Outlet, Link } from "react-router";
import styles from "./Layout.module.scss";

export default function Layout() {
    const logoSrc = "/src/assets/icons/subsentry-logo-text.svg";

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to="/">
                    <img src={logoSrc} alt="subsentry-logo" className={styles.logo} />
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <main className={styles.mainContent}>
                <Outlet />
            </main>
        </div>
    );
}
