"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image - Using the generated image placeholder */}
            {/* Ensure you copy the generated image to /public/hero-bg.png */}
            <div className={styles.bgImage}>
                <Image
                    src="/hero_dog_yard.png"
                    alt="Happy dog in clean yard"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                {/* Overlay gradient for readability */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 100%)',
                    zIndex: 1
                }} />
            </div>

            <div className="container">
                <div className={styles.content}>
                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        THEY POOP. WE SCOOP.<br />
                        <span style={{ color: 'var(--primary-orange)' }}>YOU DO YOU.</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        If you don’t wanna pick up doody, we do.
                    </motion.p>

                    <motion.div
                        className={styles.ctaContainer}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className={styles.formTitle}>SIGN UP TODAY</h3>
                        <p className={styles.formSubtitle}>ENTER YOUR ZIP TO GET STARTED</p>

                        <form className={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Zip Code" className={styles.input} />
                            <button type="submit" className={styles.submitBtn}>
                                LET'S GO!
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
