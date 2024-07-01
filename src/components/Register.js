// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    password: '',
    // other fields...
  });

  const { fullName, dob, email, phone, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input type="text" name="fullName" value={fullName} onChange={e => onChange(e)} required />
      <input type="date" name="dob" value={dob} onChange={e => onChange(e)} required />
      <input type="email" name="email" value={email} onChange={e => onChange(e)} required />
      <input type="text" name="phone" value={phone} onChange={e => onChange(e)} required />
      <input type="password" name="password" value={password} onChange={e => onChange(e)} required />
      {/* other fields... */}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
