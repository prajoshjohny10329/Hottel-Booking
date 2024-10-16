// Header.tsx
import { useState } from 'react';
import { FaUserCircle, FaAngleDown, FaBars } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [showSubServices, setShowSubServices] = useState(false);

  const toggleSubServices = () => {
    setShowSubServices((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <div onMouseEnter={toggleSubServices} onMouseLeave={toggleSubServices} className={styles.services}>
              Services <FaAngleDown />
              {showSubServices && (
                <div className={styles.subServices}>
                  <ul className={styles.subMenu}>
                    <li><a href="/service1">Service 1</a></li>
                    <li><a href="/service2">Service 2</a></li>
                    <li><a href="/service3">Service 3</a></li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/offers">Offers</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <FaBars />
      </div>

      
    </header>
  );
};

export default Header;
