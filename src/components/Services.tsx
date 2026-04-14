"use client";

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const plans = [
    {
        title: "ONE VISIT A WEEK (1X)",
        price: "$25.00",
        details: [
            "Same Weekday Service",
            "Price Good for Up to 4 Dogs",
            "Most Popular Choice"
        ]
    },
    {
        title: "TWO VISITS A WEEK (2X)",
        price: "$22.00",
        details: [
            "Same Weekday Services",
            "Price Good for Up to 4 Dogs",
            "Consistently Clean Yard"
        ]
    },
    {
        title: "BI-WEEKLY VISITS (2x/MO)",
        price: "$35.00",
        details: [
            "Every Other Week Service",
            "Price Good for Up to 2 Dogs",
            "Budget Friendly Option"
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <h2 className="section-title">PAW-FECT SERVICES, FUR-REAL PRICES</h2>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <h3 className={styles.planTitle}>{plan.title}</h3>
                            <div className={styles.priceContainer}>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.perVisit}>/PER VISIT</span>
                            </div>

                            <ul className={styles.features}>
                                {plan.details.map((detail, i) => (
                                    <li key={i}>
                                        <Check className={styles.icon} size={20} />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            <a href="#" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center' }}>
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
