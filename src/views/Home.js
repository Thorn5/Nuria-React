import React, {useEffect, useState} from 'react';
import useFetchData from '../hooks/useFetchData';

const Home = () => {
    const { data, loading, error } = useFetchData('http://hn.algolia.com/api/v1/search?query=bar');
    const [fetchedData, setFetchedData] = useState([]);
    const [loadingData, setLoading] = useState(loading);
    const [errorFetch, setError] = useState(error);

    useEffect(() => {
        data ? setFetchedData(data.hits) : setFetchedData(null)
        setLoading(loading);
        setError(error);
      }, [data, loading, error]);

      console.log(fetchedData);

      if (loadingData) {
        return <p>Loading...</p>;
      }

      if (errorFetch) {
        return <p>An error occurred: {error.message}</p>;
      }

  return (
    <div>
        Latest news
        <ul>
            {fetchedData !== null ? fetchedData.map(item => (
                <li key={item.objectID}>{item.title}</li>
            )): null}
        </ul>
    </div>
  )
}

export default Home