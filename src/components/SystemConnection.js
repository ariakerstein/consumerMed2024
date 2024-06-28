import React, { useState } from 'react';

function SystemConnection() {
  const [system, setSystem] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleConnect = (e) => {
    e.preventDefault();
    // Here you would implement the actual connection logic
    console.log(`Connecting to ${system} with provided credentials`);
  };

  return (
    <div className="system-connection">
      <h2>Connect to Medical System</h2>
      <form onSubmit={handleConnect}>
        <select value={system} onChange={(e) => setSystem(e.target.value)}>
          <option value="">Select a system</option>
          <option value="epic">Epic</option>
          <option value="cerner">Cerner</option>
          {/* Add more systems as needed */}
        </select>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <button type="submit">Connect</button>
      </form>
    </div>
  );
}

export default SystemConnection;