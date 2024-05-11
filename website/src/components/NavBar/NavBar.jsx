import { useRef, useState } from 'react';
import styles from './NavBar.module.css';
import Hamburger from 'hamburger-react';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const navRef = useRef(null);

    const handleHamburger = () => {
        if (navRef.current.style.display === 'none' || navRef.current.style.display === '') {
            navRef.current.style.display = 'flex';
        } else {
            navRef.current.style.display = 'none';
        }
        setOpen(!isOpen);
    };

    return (
        <div className={styles.navContainer}>
            <Hamburger toggled={isOpen} toggle={handleHamburger} />
            <nav className={styles.navBar} ref={navRef}>
                <div>ГЛАВНАЯ</div>
                <div>ИНФО</div>
                <div>ДИПЛОМЫ И СЕРТИФИКАТЫ</div>
                <div>ОТЗЫВЫ</div>
                <div>ОФЕРТА</div>
            </nav>
        </div>
    );
};

export default NavBar;
