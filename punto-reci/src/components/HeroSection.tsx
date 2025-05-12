import React from 'react';
import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Column - Text Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Recicla y Transforma el Mundo
          </h1>
          <p className={styles.heroText}>
            Juntos podemos hacer la diferencia. Nuestra aplicación te ayuda a reciclar 
            correctamente y reducir tu impacto ambiental de manera sencilla y efectiva.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Comenzar ahora
            </button>
            <button className={styles.secondaryButton}>
              Saber más
            </button>
          </div>
        </div>
        
        {/* Right Column - Hero Image */}
        <div className={styles.heroImage}>
          <Image
            src="/hero-image.svg"
            alt="Recycling Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>10K+</p>
            <p className={styles.statLabel}>Usuarios activos</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>5 Ton</p>
            <p className={styles.statLabel}>Residuos reciclados</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>20+</p>
            <p className={styles.statLabel}>Ciudades alcanzadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;