"use client";

import Image from 'next/image';
import styles from './ReadyForDoody.module.css';

export default function ReadyForDoody() {
    return (
        <section id="signup" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>WE’RE READY FOR DOODY!</h2>
                <p className={styles.introText}>
                    Stand at ease, pet parents. doodydo is on duty. Our pooper scooper service goes the extra mile to keep your yard clean, your pets happy, and your home base fresh. Every family deserves a poop-free yard, and we’re here to make it mission accomplished.
                </p>

                <div className={styles.truckImageContainer}>
                    {/* CTA Card overlaid on truck image/section in desktop */}
                    <div className={styles.card}>
                        <h3 className={styles.ctaTitle}>SIGN UP TODAY</h3>
                        <p className={styles.ctaSubtitle}>ENTER YOUR ZIP TO GET STARTED</p>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Zip Code" className={styles.input} />
                            <button className={styles.button}>LET'S GO!</button>
                        </div>
                    </div>

                    <Image
                        src="/branded_truck.png"
                        alt="DoodyDo Branded Truck"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
        </section>
    );
}
