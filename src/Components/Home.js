import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="overlay">
                <motion.div
                    className="content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>BLAST MMA</h1>
                    <p>Înfruntă-ți limitele. Devino mai puternic.</p>
                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        Programează un antrenament
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;