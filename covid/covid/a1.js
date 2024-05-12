import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [region, setRegion] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.rootnet.in/covid19-in/stats/latest?region=${region}`);
    setData(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search by region:
          <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      {data && (
        <div>
          <h2>{data.region.name}</h2>
          <p>Total cases: {data.summary.total}</p>
          <p>Total deaths: {data.summary.deaths}</p>
          {/* Display other relevant data here */}
        </div>
      )}
    </div>
  );
}

export default App;
