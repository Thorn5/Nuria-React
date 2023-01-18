
import React, { useState } from "react";

export default function JsonPlaceholderPost() {

    const [title, setTitle ] = useState("");
    const [body, setBody ] = useState("");
    const [userId, setId ] = useState("");

    const [myPosts, setMyPosts] = useState([]);
  const formSubmit = (event) => {
    event.preventDefault();
    console.log('info submitted', title, body, userId);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        setMyPosts(info => [...info, json]);
    });
  };

  return (
    <div className="App">
      <div className="Instructions">
        <div className="block">
          <h1>POST request</h1>
        </div>

        <div className="block">
          <form>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              placeholder="Enter Title"
              required
            />
            <br />
            <label htmlFor="body">Body: </label>
            <input
              type="text"
              id="body"
              name="body"
              value={body}
              onChange={(e)=>setBody(e.target.value)}
              placeholder="Enter Body"
              required
            />
            <br />
            <label htmlFor="userID">User ID: </label>
            <input
              type="text"
              id="userID"
              name="userID"
              value={userId}
              onChange={(e)=>setId(e.target.value)}
              placeholder="Enter User ID"
              required
            />
            <br />
            <button value="Submit" onClick={formSubmit}>
              Submit
            </button>
          </form>
          <br />
          <div>
            <h2>Posts</h2>
            {myPosts.length ? (
                myPosts.map((element) => (
                <div key={element.id}>
                  <p>Title: {element.title}</p>
                  <p>Body: {element.body}</p>
                  <p>User ID: {element.userId}</p>
                </div>
              ))
            ) : (
              <div>No posts fetched yet</div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
