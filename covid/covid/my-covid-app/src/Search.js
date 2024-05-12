import React from 'react';
import './Search.css';

function Search(props) {
  const { onSearch } = props;
  const [query, setQuery] = React.useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a region..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
} 

export default Search;
