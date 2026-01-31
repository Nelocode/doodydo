"use client";

import Image from 'next/image';
import styles from './Guarantee.module.css';
import { motion } from 'framer-motion';

export default function Guarantee() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.intro}>
                    <h3>NO PILE LEFT BEHIND!</h3>
                    <h2>THE DOODYDO GUARANTEE</h2>
                </div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.blob}></div>
                        <div className={styles.mainImage}>
                            <Image src="/girl_dog_guarantee.png" alt="Happy customer with dog" fill style={{ objectFit: 'cover' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            At doodydo, we understand that pet waste removal is an important service that helps keep your yard clean and safe for your family and pets. We take pride in providing reliable and efficient services to our valued customers.
                        </p>
                        <p>
                            If you ever notice a missed pile during our service, we want to know about it. Simply let us know within 24 hours of the service, and we will take prompt action to address the issue. Our team of trained professionals will work hard to ensure that we correct the problem within the next 24 hours.
                        </p>
                        <p>
                            In the unlikely event that we are unable to correct the issue within the next 24 hours, we will provide you with a refund for that particular service. We believe in standing behind our commitment to delivering high-quality work.
                        </p>
                        <p>
                            At doodydo, we are passionate about providing exceptional customer service. You can trust that we will always put our customers first.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
