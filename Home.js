// Import React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Hacker News Search</h1>
      </div>
      <div className="content">
        <div className="search-bar">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>

        <ul className="post-list">
          {results.map((result) => (
            <li key={result.objectID} className="post">
              <h2 className="post-title">
                <Link to={`/post/${result.objectID}`}>{result.title}</Link>
              </h2>
              <p className="post-meta">
                Points: {result.points} | Author: {result.author} | Comments: {result.num_comments}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
