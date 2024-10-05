import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the list of contacts
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Function to add a contact
  const addContact = () => {
    if (name.trim() && phone.trim()) {
      setContacts([...contacts, { name, phone }]);
      setName(''); // Reset input fields
      setPhone('');
    }
  };

  // Function to remove a contact by index (position)
  const removeContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>

      {/* Input Fields */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>

      {/* Contact List */}
      <div className="contact-list">
        {contacts.length === 0 ? (
          <p>No contacts available</p>
        ) : (
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <span>{index}: {contact.name} - {contact.phone}</span>
                <button onClick={() => removeContact(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
