import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <motion.div
                className="contact-info"
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
            >
                <h2>Contact</h2>
                <p><strong>Adresă:</strong> Soseaua Virtutii nr. 42, etaj 5, București</p>
                <p><strong>Telefon:</strong> 0761 292 890</p>
                <p><strong>Instagram/TikTok:</strong> @blastmma_</p>
                <p>Te așteptăm să îți începi călătoria spre forță și disciplină la BLAST MMA!</p>
            </motion.div>

            <motion.div
                className="contact-map"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.1262198408318!2d26.037324190551733!3d44.44331758675763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2010016ff71dd%3A0xabf05fed237daf44!2sBLAST%20MMA!5e0!3m2!1sro!2sro!4v1752066433644!5m2!1sro!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Harta BLAST MMA"
                ></iframe>
            </motion.div>
        </section>
    );
};

export default Contact;