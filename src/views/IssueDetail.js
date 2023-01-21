import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

const IssueDetail = () => {

  const issueNumber = useParams();
  const [issue, setIssue] = useState({});
  const [comments, setComments] = useState([]);


  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.github.com/repos/rails/rails/issues/${issueNumber.id}`
      );

      setIssue(result.data);

      const commentsResult = await axios.get(result.data.comments_url);
      setComments(commentsResult.data);
    };

    fetchData();

  }, [])

  return (
    <>
      <h1>{issue.title}</h1>
      {/* Rendering info */}
      <p>{issue.body}</p>
      {/* Rendering info via React Markdown library to style markup */}
      <ReactMarkdown children={issue.body} />

      {/* Rendering comments */}
      <h2>Comments</h2>
      {comments.length ? comments.map((comment) => (
        <div key={comment.id}>
          {comment.body}
        </div>
      )) : <p>No comments yet</p>}
    </>
  );
};

export default IssueDetail;



