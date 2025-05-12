import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import stylesModule from './page.module.css';
import { getStylesPath } from '@/utils/path';

// Aplicar la función para procesar los estilos
const styles = getStylesPath(stylesModule);

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <BlogSection />
      <Footer />
    </main>
  );
}