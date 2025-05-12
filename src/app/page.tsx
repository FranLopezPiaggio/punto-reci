import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

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