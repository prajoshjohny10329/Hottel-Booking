import { useState } from 'react';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import styles from './Signup.module.css';


export default function Signup({ setUser }: { setUser: (user: any) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('log handel sub');
    
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, phone}),
    });

    const data = await res.json();

    if (res.ok) {
      // Assuming the API returns the user object on successful signup
      setUser(data.user); // Set the user in global state
      router.push('/dashboard'); // Navigate to dashboard after signup
    } else {
      setError(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>Sign Up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <PhoneInput
            country={'us'}  // Default country for the phone input
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputClass={styles.input}
            containerClass={styles.phoneInput}
            inputStyle={{
              width: '100%',
              padding: '12px',
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <a href="/login" className={styles.link}>Already have an account? Login</a>
      </div>
    </div>
  );
}
