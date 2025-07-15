import React from 'react';
import './Schedule.css';
import { motion } from 'framer-motion';

const scheduleData = [
    { day: 'Luni', hours: '20:30 - 22:00', theme: 'Tehnica Strike' },
    { day: 'Marți', hours: '08:00 - 10:00', theme: 'Tehnica MMA' },
    { day: 'Miercuri', hours: '20:30 - 22:00', theme: 'Sparring' },
    { day: 'Joi', hours: '08:00 - 10:00', theme: 'Tehnica MMA' },
    { day: 'Vineri', hours: '20:30 - 22:00', theme: 'Grappling' },
    { day: 'Sâmbătă', hours: '14:00 - 15:30', theme: 'Tehnica MMA' },
    { day: 'Duminică', hours: '14:00 - 15:30', theme: 'Sparring' },
];

const Schedule = () => {
    return (
        <section id="orar" className="schedule">
            <div className="schedule-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Orar Antrenamente
                </motion.h2>
                <div className="schedule-grid">
                    {scheduleData.map((item, index) => (
                        <motion.div
                            className="schedule-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3>{item.day}</h3>
                            <p>{item.hours}</p>
                            <p>{item.theme}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;