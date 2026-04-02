import React from 'react';
import styles from './KeyBind.css';

export default function KeyBind({ keys }) {
  return (
    <kbd className={styles.kbd}>
      {keys.split('+').map((key, idx) => (
        <span key={idx} className={styles.key}>
          {key.trim()}
        </span>
      ))}
    </kbd>
  );
}