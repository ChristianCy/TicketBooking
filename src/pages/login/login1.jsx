import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Form data submitted:', formData);
  };

  const handleReturn = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className={styles.loginContainer}>
      <button className={styles.returnBtn} onClick={handleReturn}>Return</button>
      <h1 className={styles.loginTitle}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>Password</label>
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
        <button type="submit" className={styles.loginBtn}>Login</button>
        <p className={styles.forgotPassword}>
          Lost password? <span className={styles.clickHere} onClick={() => navigate('/lost-password')}>Click here!</span>
        </p>
      </form>
    </div>
  );
}

export default Login;

