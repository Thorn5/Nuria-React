import { useState, useContext } from 'react';
import { CounterContext } from '../context/CounterProvider';


const FilmForm = () => {
  const [name, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const api_url = process.env.REACT_APP_BACKEND_URL;
  const {incrementCounter, decrementCounter, counter} = useContext(CounterContext);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { name, year, genre };
    const headers = {'Content-Type': 'application/json'}
    const token = sessionStorage.getItem("jwt");
    if(token) {
      headers.Authorization = `Bearer ${token}`;
    }
    setLoading(true)
    try{
      const response = await fetch(api_url + 'api/films', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });
      if(response.ok) {
        setSuccess(true)
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message)
      }
    } catch(e) {
      setError(e)
      setTimeout(() => {
        setError(null)
      }, 3000)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {success && <p>Film added successfully!</p>}
      {!loading && !error && !success && (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={name} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <br />
          <label>
            Year:
            <input type="text" value={year} onChange={(event) => setYear(event.target.value)} />
          </label>
          <br />
          <label>
            Genre:
            <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      <button onClick={incrementCounter}>Increment</button>
      {counter}
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default FilmForm;