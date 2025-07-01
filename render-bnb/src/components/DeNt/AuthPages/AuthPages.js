import React, { useState } from 'react';
import '../../../css/DeNt/AuthPages/AuthPages.css';
import { loginUser, registerUser } from '../../../services/authService';

// Login Component
const Login = ({ onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const result = await loginUser(formData);
      console.log('Login successful:', result);
      window.location.href = '/';
    } catch (error) {
      setError(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h1>HomeFU</h1>
          <h2>Вхід в систему</h2>
        </div>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <label htmlFor="login">Логін</label>
            <input
              type="text"
              id="login"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-actions">
            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? 'Завантаження...' : 'Увійти'}
            </button>
          </div>
        </form>
        <div className="auth-alternative">
          <p>Немає облікового запису?</p>
          <button className="auth-link-btn" onClick={onSwitchToSignUp}>
            Зареєструватися
          </button>
        </div>
      </div>
    </div>
  );
};
const SignUp = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Check password match when either password field changes
    if (name === 'password' || name === 'repeatPassword') {
      if (name === 'password') {
        setPasswordMatch(value === formData.repeatPassword || formData.repeatPassword === '');
      } else {
        setPasswordMatch(value === formData.password);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.repeatPassword) {
      setPasswordMatch(false);
      return;
    }
    
    setError('');
    setLoading(true);
    
    try {
      // Only send the required fields to the API
      const userData = {
        login: formData.login,
        email: formData.email,
        password: formData.password
      };
      
      const result = await registerUser(userData);
      console.log('Registration successful:', result);
      window.location.href = '/';
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h1>HomeFU</h1>
          <h2>Реєстрація</h2>
        </div>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <label htmlFor="login">Логін</label>
            <input
              type="text"
              id="login"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="email">Електронна пошта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="repeatPassword">Повторіть пароль</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className={!passwordMatch ? 'input-error' : ''}
              required
            />
            {!passwordMatch && (
              <p className="error-message">Паролі не збігаються</p>
            )}
          </div>
          <div className="auth-actions">
            <button type="submit" className="auth-submit-btn" disabled={loading || !passwordMatch}>
              {loading ? 'Завантаження...' : 'Зареєструватися'}
            </button>
          </div>
        </form>
        <div className="auth-alternative">
          <p>Вже маєте обліковий запис?</p>
          <button className="auth-link-btn" onClick={onSwitchToLogin}>
            Увійти
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Auth Container Component that switches between Login and SignUp
const AuthPages = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="auth-page-container">
      {isLoginView ? (
        <Login onSwitchToSignUp={() => setIsLoginView(false)} />
      ) : (
        <SignUp onSwitchToLogin={() => setIsLoginView(true)} />
      )}
    </div>
  );
};

export default AuthPages;