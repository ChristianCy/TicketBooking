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
      <h1>ResetPassword</h1>
    </div>
  );
}

export default ResetPassword;
