import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const IssuesList = () => {

  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=50`
      );
      setIssues(result.data)
    };

    fetchData();

  }, [page])
  
  
 
  return (
    <div>
      <h1>Issues</h1>
      <ul>
        {issues.length ? issues.map((issue) => (
          <li key={issue.id} onClick={() => navigate(`issue/${issue.number}`)}>
            {issue.title}
          </li>
        )) : null}
      </ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
     
    </div>
  );
};
 export default IssuesList;