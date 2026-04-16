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
                        <p className={styles.servingText}>Serving North Atlanta</p>
                        <a href="https://client.sweepandgo.com/login/doodydo-vlnrm" target="_blank" rel="noopener noreferrer" className={styles.appButton}>Get Started</a>
                    </div>

                    <div className={styles.carLogoOverlay}>
                        <Image
                            src="/doodydo_web_logo.png"
                            alt="DoodyDo Logo"
                            width={220}
                            height={120}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <Image
                        src="/black_car.png"
                        alt="DoodyDo Black Car"
                        fill
                        style={{ objectFit: 'contain', priority: 'true' } as any}
                    />
                </div>
            </div>
        </section>
    );
}
