import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPassword.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Form data submitted for password reset:', formData);
  };

  const handleReturn = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      <div className={styles.resetPasswordContainer}>
        <button className={styles.returnBtn} onClick={handleReturn}>Return</button>
        <h1 className={styles.resetPasswordTitle}>Reset Password</h1>
        <form onSubmit={handleSubmit} className={styles.resetPasswordForm}>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>New Password</label>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faLock} className={styles.icon} />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.formLabel}>Confirm Password</label>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faLock} className={styles.icon} />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>
          <button type="submit" className={styles.resetPasswordBtn}>Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;