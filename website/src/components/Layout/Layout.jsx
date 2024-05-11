import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
      );
}
 
export default Layout;