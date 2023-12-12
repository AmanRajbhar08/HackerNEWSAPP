
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import PostDetail from './components/PostDetails';
import "./styles.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
