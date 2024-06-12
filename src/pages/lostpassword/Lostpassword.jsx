import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LostPassword.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function LostPassword() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Email submitted for password recovery:', email);
  };

  const handleReturn = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className={styles.lostPasswordContainer}>
      <button className={styles.returnBtn} onClick={handleReturn}>Return</button>
      <h1 className={styles.lostPasswordTitle}>Lost Password</h1>
      <form onSubmit={handleSubmit} className={styles.lostPasswordForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
        </div>
        <button type="submit" className={styles.lostPasswordBtn}>Submit</button>
      </form>
    </div>
  );
}

export default LostPassword;

