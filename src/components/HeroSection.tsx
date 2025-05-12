import React from 'react';
import { getAssetPath, getStylesPath } from '../utils/path';
import stylesModule from '../styles/HeroSection.module.css';

// Aplicar la función para procesar los estilos
const styles = getStylesPath(stylesModule);

const HeroSection = () => {
  return (
    <section 
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${getAssetPath('/grass.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay para mejorar la legibilidad del texto */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      />
      
      <div className={`container ${styles.heroContainer}`} style={{ position: 'relative', zIndex: 2 }}>
        {/* Left Column - Text Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Recicla y Transforma el Mundo
          </h1>
          <p className={styles.heroText}>
          Creamos una app que recompensa el reciclaje y conecta personas, puntos verdes y comercios. Empezamos en Posadas, con la visión de expandirnos a todo el país y generar impacto real.
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
          {/* Podemos quitar esta imagen ya que ahora tenemos un fondo */}
          {/* <Image
            src="/grass.jpg"
            alt="Grass"
            width={700}
            height={599}
            className="object-contain"
            priority
          /> */}
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className={`container ${styles.statsContainer}`} style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>20</p>
            <p className={styles.statLabel}>PuntosReci</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>228mil Ton/hora</p>
            <p className={styles.statLabel}>Residuos producidos en el mundo</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>Recibi beneficios</p>
            <p className={styles.statLabel}>Con cada reciclaje ganan todos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;