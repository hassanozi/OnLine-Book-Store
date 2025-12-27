import React from 'react'
import styles from './Subscribe.module.css';

export default function SubscribeNewsLetter() {
  return (
    <>
       <div className={`${styles.roseBg}`}>
        <div className={`${styles.orange}`}>
            <h1>Subscribe to Our Newsletter</h1>
            <p>Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur.</p>
            <p>Elit adipiscing enim pharetra hac.</p>
        </div>

        <div className={styles.subscribeBox}>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
        </div>
    </>
  )
}
