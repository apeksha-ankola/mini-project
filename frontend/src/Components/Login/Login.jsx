import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import useLogin from '../../hooks/useLogin';

function Login() {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({username,password});
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group controlId="formBasicUsername">
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername( e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword( e.target.value)}
        />
      </Form.Group>

      <Button variant="info" type="submit" className="mt-2">
        Login
      </Button>
    </Form>
  );
}

export default Login;



