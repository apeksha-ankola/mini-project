import React, { useState } from 'react';
import { signUp } from '../../api';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function SignUp() {
  const [formData, setFormData] = useState({ fullName:'', username: '', password: '', confirmPassword:'', gender:'' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // await signUp(formData);
    // navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">

      <Form.Group controlId="formBasicFullName">
        <Form.Control
          type="text"
          placeholder="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </Form.Group>

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

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formBasicGender">
        <Form.Control
          type="text"
          placeholder="Gender"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />
      </Form.Group>

      <Button variant="info" type="submit" className="mt-2">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUp;

