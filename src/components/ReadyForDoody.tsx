"use client";

import Image from 'next/image';
import styles from './ReadyForDoody.module.css';

export default function ReadyForDoody() {
    return (
        <section id="signup" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>WE'RE READY FOR DOODY!</h2>
                <p className={styles.introText}>
                    Stand at ease, pet parents. doodydo is on duty. Our pooper scooper service goes the extra mile to keep your yard clean, your pets happy, and your home base fresh. Every family deserves a poop-free yard, and we're here to make it mission accomplished.
                </p>

                <div className={styles.layout}>
                    {/* CTA Card */}
                    <div className={styles.card}>
                        <h3 className={styles.ctaTitle}>CLIENT LOG IN</h3>
                        <p className={styles.ctaSubtitle}>ACCESS YOUR DOODYDO ACCOUNT</p>
                        <a href="https://client.sweepandgo.com/login/doodydo-vlnrm" target="_blank" rel="noopener noreferrer" className={styles.appButton}>
                            Client Log In
                        </a>
                        <div className={styles.divider}></div>
                        <p className={styles.servingText}>New Customer?</p>
                        <a href="https://client.sweepandgo.com/doodydo-vlnrm/register" target="_blank" rel="noopener noreferrer" className={`${styles.appButton} ${styles.orangeBtn}`}>
                            Get Started
                        </a>
                    </div>

                    {/* Black Car Illustration */}
                    <div className={styles.carContainer}>
                        <Image
                            src="/black_car_cropped.png"
                            alt="DoodyDo Service Vehicle"
                            width={520}
                            height={390}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
