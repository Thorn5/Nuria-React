import React from 'react';
import useFetchData from '../hooks/useFetchData';
import useToggle from '../hooks/useToggle';

const Home = () => {
  const {value, toggle} = useToggle(true);
  const {data, loading, error} = useFetchData(`http://hn.algolia.com/api/v1/search?query=fetch`);

  return (
    <div>
      <h1>Fetch news</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
          <div>
            {data && !error ? data.hits.map((hit) => (
              <div key={hit.objectID}>{hit.title}</div>
            )) : <p>Error here</p> }
          </div>
      )}
      <button onClick={toggle}>Toggle</button>
      {value === true ? <p>The toggle is on</p> : <p>The toggle is off</p>}
    </div>
  );
};

export default Home;