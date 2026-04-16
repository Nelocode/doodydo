"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const CLIENT_LOGIN_URL = "https://client.sweepandgo.com/login/doodydo-vlnrm";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMobileOpen(false);

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
                    <a href={CLIENT_LOGIN_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>Client Login</a>
                    <a href="https://client.sweepandgo.com/doodydo-vlnrm/register" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Sign Up Today
                    </a>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
                <Link href="#services" className={styles.mobileLink} onClick={closeMenu}>Services</Link>
                <Link href="#about" className={styles.mobileLink} onClick={closeMenu}>Why Us</Link>
                <Link href="#contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
                <a
                    href={CLIENT_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileLink}
                    onClick={closeMenu}
                >
                    Client Login
                </a>
                <a
                    href="https://client.sweepandgo.com/doodydo-vlnrm/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileSignUp}
                    onClick={closeMenu}
                >
                    Sign Up Today
                </a>
            </div>
        </header>
    );
}
