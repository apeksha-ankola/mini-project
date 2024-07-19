import React, { useState } from 'react';
import { login } from '../../api';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login(formData);
    localStorage.setItem('token', data.token);
    onLogin();
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group controlId="formBasicUsername">
        <Form.Control
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </Form.Group>

      <Button variant="info" type="submit" className="mt-2">
        Login
      </Button>
      <br />
      <a href="/signup"> Dont have an account, signup here</a>
    </Form>

  );
}

export default Login;



