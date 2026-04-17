"use client";

import React, { useState, useEffect } from 'react';
import styles from './TopBanner.module.css';

const TopBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Current date check
    const now = new Date();
    const expirationDate = new Date('2026-05-01T00:00:00');
    
    if (now < expirationDate) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <span className={styles.icon}>📅</span>
      <span>Service starts May 1st - Sign up now to reserve your spot!</span>
    </div>
  );
};

export default TopBanner;
