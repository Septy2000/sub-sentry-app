import { Outlet, Link } from "react-router";
import styles from "./Layout.module.scss";

export default function Layout() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to="/">SubSentry</Link>
                </div>
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
