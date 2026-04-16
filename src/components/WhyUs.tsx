"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Truck, Trash2, Calendar, CheckCircle, Shield, Award } from 'lucide-react';
import styles from './WhyUs.module.css';

const features = [
    { icon: Calendar, text: "Free Deodorizer Promo" },
    { icon: CheckCircle, text: "Up To 4 Dogs Included" },
    { icon: Shield, text: "Picture of Secured Gate" },
    { icon: Trash2, text: "We Remove and Dispose of All Pet Waste" },
];

const rightFeatures = [
    { icon: Shield, text: "Trained & Background Checked" },
    { icon: Calendar, text: "No Contracts" },
    { icon: Award, text: "Doodydo Guarantee" },
    { icon: Truck, text: "Marked Trucks" },
];

export default function WhyUs() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h3 className={styles.subtitle}>BEST IN SHOW!</h3>
                    <h2 className="section-title">WHY DOODYDO?</h2>
                </div>

                <div className={styles.content}>

                    <div className={styles.column}>
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className={styles.featureItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.iconCircle}>
                                    <feature.icon size={24} color="#d3490c" />
                                </div>
                                <span>{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.centerImage}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', width: '300px', height: '300px' }}
                        >
                            <Image
                                src="/dog_mascot.png"
                                alt="DoodyDo Dog Mascot"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </motion.div>
                    </div>

                    <div className={styles.column}>
                        {rightFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                className={`${styles.featureItem} ${styles.right}`}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span>{feature.text}</span>
                                <div className={styles.iconCircle}>
                                    <feature.icon size={24} color="#d3490c" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
