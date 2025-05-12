import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import basePath from '../../next.config';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image 
            src={`${basePath}/logo-punto-reci.svg`}
            alt="Recycling App Logo" 
            width={100} 
            height={100}
          />
          <h1 className={styles.logoText}>PuntoReci</h1>
        </div>
        
        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Inicio</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about" className={styles.navLink}>Nosotros</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#blog" className={styles.navLink}>Blog</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>Contacto</Link>
            </li>
          </ul>
        </nav>
        
        {/* CTA Button */}
        <button className={styles.ctaButton}>
          Únete
        </button>
        
        {/* Mobile Menu Button (Only visible on mobile) */}
        <button className={styles.mobileMenuButton}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;