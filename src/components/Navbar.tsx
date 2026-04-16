"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/Logoheader.png" alt="DoodyDo Logo" width={180} height={60} style={{ objectFit: 'contain' }} priority />
                </Link>

                <nav className={styles.navLinks}>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#about" className={styles.link}>Why Us</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                    <a href="https://client.sweepandgo.com/login/doodydo-vlnrm" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Sign Up Today
                    </a>
                </nav>

                <button className={styles.mobileMenuBtn}>
                    ☰
                </button>
            </div>
        </header>
    );
}
