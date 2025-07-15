import React from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        '/assets/img1.jpg',
        '/assets/img2.jpg',
        '/assets/img3.jpg',
        '/assets/img4.jpg',
        '/assets/img5.jpg',
        '/assets/img6.jpg'
    ];

    return (
        <section id="galerie" className="gallery">
            <div className="gallery-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Galerie BLAST MMA
                </motion.h2>
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <motion.div
                            className="gallery-item"
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={src} alt={`BLAST MMA ${index + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;