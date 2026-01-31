import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            {/* Pre-footer CTA */}
            <div className={styles.ctaBar}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>READY TO CHECK YARD CLEANUP<br />OFF YOUR TO-DO LIST?</h2>
                    <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>Getting started takes just minutes.</p>
                    <Link href="#signup" className={styles.ctaButton}>
                        Schedule Your First Visit
                    </Link>
                </div>
            </div>

            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.grid}>

                        <div className="column">
                            <Link href="/" className={styles.brandTitle} style={{ display: 'block', position: 'relative', width: '200px', height: '80px', marginBottom: '1rem' }}>
                                <Image src="/logofooter.png" alt="DoodyDo Logo" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
                            </Link>
                            <p className={styles.text}>
                                doodydo provides professional pet waste removal for homes and businesses throughout North Atlanta. We arrive on schedule, remove all dog waste, and take it with us.
                            </p>
                            <p className={styles.text}>
                                They doody. We do.
                            </p>
                        </div>

                        <div className="column">
                            <h3 className={styles.columnTitle}>Service</h3>
                            <ul className={styles.links}>
                                <li><Link href="#">Weekly Visits</Link></li>
                                <li><Link href="#">Twice-Weekly Service</Link></li>
                                <li><Link href="#">Every Other Week</Link></li>
                                <li><Link href="#">One-Time Cleanups</Link></li>
                            </ul>
                        </div>

                        <div className="column">
                            <h3 className={styles.columnTitle}>Company</h3>
                            <ul className={styles.links}>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">FAQ</Link></li>
                                <li><Link href="#">Contact</Link></li>
                                <li><Link href="#">Login</Link></li>
                            </ul>
                        </div>

                        <div className="column">
                            <h3 className={styles.columnTitle}>Serving North Atlanta</h3>
                            <div className={styles.contactInfo}>
                                <p>Not sure if you’re in our service area? Reach out, we’d love to help.</p>
                                {/* <p>📞 (555) 123-4567</p> */}
                            </div>
                        </div>

                    </div>

                    <div className={styles.copyright}>
                        <p>&copy; {new Date().getFullYear()} doodydo. All rights reserved.</p>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
                            Dog Poop Pickup & Pet Waste Removal in North Atlanta
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
