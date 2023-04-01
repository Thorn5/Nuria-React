import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const api_url = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { firstName, lastName, email, password };
    const headers = {'Content-Type': 'application/json'}
    setLoading(true)
    try{
      const response = await fetch(api_url + 'api/user/signup', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });
      if(response.ok) {
        setSuccess(true)
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      } else {
        const errorData = await response.json();
        console.log(errorData)
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
      {success && <p>Signup successful!</p>}
      {!loading && !error && !success && (
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          </label>
          <br />
          <label>
            Last name:
            <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      </div>
  );
}

export default Signup;