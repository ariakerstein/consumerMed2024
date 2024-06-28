import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <h2>Medical Records</h2>
      <ul>
        <li><Link to="/">View All Records</Link></li>
        <li><Link to="/connect">Get Records</Link></li>
        <li><Link to="/chat">AI Chat</Link></li>
        <li><Link to="/chat">Claims</Link></li>
      </ul>
      <h3>Med Record Categories</h3>
      <ul>
        <li>Images</li>
        <li>Labs</li>
        <li>Doctor Notes</li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;