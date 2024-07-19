import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal, Form, InputGroup } from 'react-bootstrap';
import NavbarCustom from '../Navbar/NavbarCustom';
import UserProfile from '../UserProfile/UserProfile';
import profilePic from '../../images/profile-pic.jpg';
import './DashboardPage.css';

const contacts = [
  { id: 1, name: 'Apeksha', status: 'Online', avatar: profilePic },
  { id: 2, name: 'Fatima', status: 'Offline', avatar: profilePic },
  { id: 3, name: 'Ayaj', status: 'Offline', avatar: profilePic },
  { id: 2, name: 'Dhruva', status: 'Offline', avatar: profilePic },
];

const currentUser = {
  username: 'JohnDoe',
  avatar: profilePic,
};

function DashboardPage({ isLoggedIn, handleLogout }) {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [user, setUser] = useState(currentUser);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser);
    setShowProfileModal(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChatClick = (contact) => {
    setActiveChat(contact);
    setMessages([]);  // Reset messages when a new chat is opened
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: currentUser.username }]);
      setNewMessage('');
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavbarCustom />
      <Container className="dashboard-container mt-3">
        <Row className="mb-3">
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Search contacts"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-bar"
            />
          </Col>
          <Col md={4} className="text-end">
            <Button variant="info" onClick={() => setShowProfileModal(true)}>Edit Profile</Button>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="contacts-col">
            <h4>Contacts</h4>
            <ListGroup>
              {filteredContacts.map(contact => (
                <ListGroup.Item key={contact.id} className="d-flex justify-content-between align-items-center contact-item">
                  <div className="d-flex align-items-center">
                    <img 
                      src={contact.avatar} 
                      alt="Avatar" 
                      className="rounded-circle me-2 contact-avatar" 
                      width="30" 
                      height="30" 
                    />
                    <div>
                      <strong>{contact.name}</strong>
                      <p className="mb-0">{contact.status}</p>
                    </div>
                  </div>
                  <Button variant="info" onClick={() => handleChatClick(contact)}>Chat</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          {activeChat && (
            <Col md={8} className="chat-col">
              <div className="d-flex align-items-center chat-header mb-3">
                <img 
                  src={activeChat.avatar} 
                  alt="Avatar" 
                  className="rounded-circle me-2 chat-avatar" 
                  width="40" 
                  height="40" 
                />
                <div>
                  <h5 className="mb-0">{activeChat.name}</h5>
                  <p className="mb-0">{activeChat.status}</p>
                </div>
              </div>
              <div className="chat-window mb-3 p-3 border rounded">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.sender === currentUser.username ? 'sent' : 'received'}`}>
                    <strong>{message.sender}: </strong>{message.text}
                  </div>
                ))}
              </div>
              <InputGroup className="chat-input-group">
                <Form.Control
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="chat-input"
                />
                <Button variant="info" onClick={handleSendMessage}>Send</Button>
              </InputGroup>
            </Col>
          )}
        </Row>
      </Container>

      <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserProfile user={user} onUpdateProfile={handleUpdateProfile} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DashboardPage;


