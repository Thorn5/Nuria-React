import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api_url = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { email, password };
    const headers = {'Content-Type': 'application/json'}
    setLoading(true)
    try{
      const response = await fetch(api_url + 'api/user/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });
      if(response.ok) {
        const { token } = await response.json();
        sessionStorage.setItem("jwt", token);
        setSuccess(true)
        setTimeout(() => {
          navigate('/')
        }, 3000)
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
    {success && <p>Login successful!</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <form onSubmit={handleSubmit}>
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

export default Login;