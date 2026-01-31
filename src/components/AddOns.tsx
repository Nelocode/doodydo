"use client";

import Image from 'next/image';
import styles from './AddOns.module.css';
import { motion } from 'framer-motion';

export default function AddOns() {
    return (
        <section className={styles.section}>
            <div className={styles.pattern}></div>
            <div className={`container ${styles.container}`} style={{ position: 'relative', zIndex: 1 }}>

                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: '1.2rem' }}>ALSO FEATURING</span>
                </div>
                <h2 className={styles.title}>POWERFUL ADD-ONS</h2>

                <div className={styles.grid}>

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.price}>STARTING AT $39.99 PER APP</div>
                        <div className={styles.imagePlaceholder}>
                            <Image src="/addon_sanitizing.png" alt="Sanitizing" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Sanitizing Spray</h3>
                        <p className={styles.description}>
                            Helps reduce bacteria and germs left behind in your lawn including Parvo and Coronavirus.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.price}>STARTING AT $6.99 PER APP</div>
                        <div className={styles.imagePlaceholder}>
                            <Image src="/addon_deodorizer.png" alt="Deodorizer" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Deodorizer Application</h3>
                        <p className={styles.description}>
                            Fight against the dreadful stench of pet waste with our deodorizer. Keeps outdoor areas smelling clean.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
