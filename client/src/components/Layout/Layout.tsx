import { Outlet } from "react-router";
import styles from "./Layout.module.scss";
import Navbar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

export default function Layout() {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
