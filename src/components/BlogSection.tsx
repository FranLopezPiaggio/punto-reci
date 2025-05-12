import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import stylesModule from '../styles/BlogSection.module.css';
import { getAssetPath, getStylesPath } from '../utils/path';

const styles = getStylesPath(stylesModule);

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Cómo separar correctamente tus residuos',
    excerpt: 'Aprende a clasificar tus residuos para un reciclaje más efectivo y contribuir al cuidado del medio ambiente.',
    image: '/recycling.jpg',
    date: '10 Mayo, 2025',
    author: 'María González',
    category: 'Consejos',
  },
  {
    id: 2,
    title: 'Beneficios del compostaje doméstico',
    excerpt: 'Descubre cómo el compostaje puede reducir tu huella de carbono y mejorar la salud de tu jardín.',
    // image: `${basePath}/recycling.jpg`,
    image: '/compost.jpg',
    date: '5 Mayo, 2025',
    author: 'Carlos Rodríguez',
    category: 'Compostaje',
  },
  {
    id: 3,
    title: 'Iniciativas de reciclaje que están cambiando ciudades',
    excerpt: 'Conoce las iniciativas innovadoras que están transformando la gestión de residuos en diversas ciudades del mundo.',
    // image: `${basePath}/recycling.jpg`,
    image: '/park-green.jpg',
    date: '28 Abril, 2025',
    author: 'Laura Martínez',
    category: 'Noticias',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestro Blog</h2>
          <p className={styles.sectionDescription}>
            Descubre artículos, consejos y noticias sobre reciclaje, sostenibilidad y cómo puedes contribuir a un mundo más verde.
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              {/* Post Image */}
              <div className={styles.blogImageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Post Content */}
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogCategory}>
                    {post.category}
                  </span>
                  <span className={styles.blogDate}>{post.date}</span>
                </div>
                
                <h3 className={styles.blogTitle}>
                  <Link href={`/blog/${post.id}`} className={styles.blogTitleLink}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className={`${styles.blogExcerpt} line-clamp-3`}>
                  {post.excerpt}
                </p>
                
                <div className={styles.blogFooter}>
                  <span className={styles.blogAuthor}>Por {post.author}</span>
                  <Link href={`/blog/${post.id}`} className={styles.blogReadMore}>
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Button */}
        <div className={styles.viewAllContainer}>
          <Link href="/blog" className={styles.viewAllButton}>
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;