import React from 'react';
import './Pricing.css';
import { motion } from 'framer-motion';

const pricingData = [
    { title: '1 Ședință', price: '50 Lei' },
    { title: '8 Ședințe / Lună', price: '300 Lei' },
    { title: '12 Ședințe / Lună', price: '350 Lei' },
    { title: 'Nelimitat / Lună', price: '500 Lei' },
];

const Pricing = () => {
    return (
        <section id="preturi" className="pricing">
            <div className="pricing-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Prețuri
                </motion.h2>
                <div className="pricing-grid">
                    {pricingData.map((item, index) => (
                        <motion.div
                            className="pricing-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;