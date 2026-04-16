"use client";

import Image from 'next/image';
import styles from './Mission.module.css';
import { motion } from 'framer-motion';

export default function Mission() {
    return (
        <section className={styles.section}>
            <div className="container">

                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    WE TAKE DOG WASTE REMOVAL SERIOUSLY –<br />
                    <span style={{ color: 'var(--primary-orange)' }}>OURSELVES, NOT SO MUCH!</span>
                </motion.h2>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.imageShape}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image src="/technician_blue_shirt.png" alt="DoodyDo technician in blue shirt" fill style={{ objectFit: 'cover' }} />
                    </motion.div>

                    <motion.div
                        className={styles.textBlock}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>What We Do</h3>
                        <h2>Dog ownership comes with a lot of joy, and a lot of cleanup.</h2>
                        <p>
                            doodydo provides professional pet waste removal for homes and businesses throughout North Atlanta. We arrive on schedule, remove all dog waste, and take it with us. Simple as that.
                        </p>
                        <p>
                            Whether you’ve got one pup or several, we customize service around your needs so your yard stays fresh and usable year-round.
                        </p>
                        <a href="https://client.sweepandgo.com/login/doodydo-vlnrm" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Get Started
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
