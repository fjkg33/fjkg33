import React, { useState } from 'react';
import '../Header/PetHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import mockup from '../mockup';

export default function PetHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') { 
      setShowResults(false);
    }
  };

  const handleIconClick = () => {
    const results = mockup.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true); 
  };

  return (
    <div className='header'>
      <Link to="/"><h1>HAVE A PUPPY DAY</h1></Link>
      <div className='search-container'>
        <input
          type='text'
          placeholder='용품 검색'
          value={searchTerm}
          onChange={handleInputChange} 
        />
        <FontAwesomeIcon
          icon={faSearch}
          className='icon'
          onClick={handleIconClick} 
        />
        {showResults && (
          <ul className='search-results'>
            {searchResults.map(item => (
              <li key={item.id}>
                <Link to={`/ItemsPage/${item.id}`}>{item.name}</Link> 
              </li>
            ))}
            {searchResults.length === 0 && ( 
              <li>검색 결과가 없습니다.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
