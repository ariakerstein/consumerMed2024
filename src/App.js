import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import RecordViewer from './components/RecordViewer';
import SystemConnection from './components/SystemConnection';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<RecordViewer />} />
            <Route path="/connect" element={<SystemConnection />} />
            <Route path="/chat" element={<ChatWindow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;