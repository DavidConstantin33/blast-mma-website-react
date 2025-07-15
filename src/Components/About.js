import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="despre" className="about">
            <div className="about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src="/assets/logo.png" alt="Despre BLAST MMA"/>
                </motion.div>
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Despre BLAST MMA</h2>
                    <p>
                        BLAST MMA este locul în care îți depășești limitele, îți antrenezi disciplina și
                        îți descoperi puterea interioară. Indiferent dacă ești începător sau avansat,
                        te ajutăm să devii cea mai bună versiune a ta, prin antrenamente complete și o comunitate unită.
                    </p>
                    <p>
                        Vino să simți atmosfera de luptă, progres și respect, într-o sală pregătită pentru
                        performanță și evoluție personală.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;