"use client";

import React from 'react';
import styles from './TopBanner.module.css';

const TopBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <span className={styles.icon}>📅</span>
      <span>Service starts May 1st - Sign up now to reserve your spot!</span>
    </div>
  );
};

export default TopBanner;
