import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import profilePic from '../../images/profile-pic.jpg'; // Import the default avatar image

function UserProfile({ user, onUpdateProfile }) {
  const [formData, setFormData] = useState({
    username: user.username,
    avatar: user.avatar || profilePic, // Use the default avatar image
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAvatar" className="mt-3">
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
        {formData.avatar && <Image src={formData.avatar} roundedCircle className="mt-2" width="100" />}
      </Form.Group>

      <Button variant="info" type="submit" className="mt-3">
        Update Profile
      </Button>
    </Form>
  );
}

export default UserProfile;
