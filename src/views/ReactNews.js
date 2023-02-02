import React from 'react';
import { useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import useToggle from '../hooks/useToggle';

const ReactNews = () => {
  const [page, setPage] = useState(1);
  const {value, toggle} = useToggle();
  const {data, loading, error} = useFetchData(`http://hn.algolia.com/api/v1/search?query=react${page}`);
  
  return (
    <div>
      <h1>React news</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            {data && !error ? data.hits.map((hit) => (
              <div key={hit.objectID}>{hit.title}</div>
            )) : <p>Error here</p> }
          </div>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </>
      )}
      
      {/* <button onClick={toggle}>Toggle</button>
      {value ? <p>The toggle is on</p> : <p>The toggle is off</p>} */}
    </div>
  )
}

export default ReactNews