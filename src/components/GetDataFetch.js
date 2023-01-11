import React, {useEffect, useState} from 'react';

function GetDataFetch() {

  const [ data, setData ] = useState([]);
  const [usernameValue, setUsernameValue] = useState("Some name to send")

  const sendRequest = () => {
    const data = { username: usernameValue }; // The data we want to send

    fetch('https://example.com/profile', {
     method: 'POST',  // We want to insert the data, so POST
     headers: {
       'Content-Type': 'application/json', // We precise that we're sending a JSON
     },
     body: JSON.stringify(data), // We transform the js object into JSON
    })
     .then(response => response.json()) // turn response text to JSON and then to a JS object
     .then(data => {
       console.log('Success:', data);
     })
     .catch(error => {
       alert('Error:', error);
     });
    
  }

  useEffect(() => {

    const myPromise = new Promise((resolve, rejected) => {
        //resolve('It is resolved')
        rejected('It has been rejected')
    })

    myPromise.then((potatoe) => {
        alert(potatoe);
    })
    .catch((err) => alert(err))

    console.log(myPromise);

    
    fetch('https://jsonplaceholder.tdfrypicode.com/posts') 
    .then(response => response.json()) // turn response text to JSON and then to a JS object
    .then(json => setData(json))
    .catch(() => console.log('Request failed')); // error during the call
    
  }, [])
  
  return (
    <div>
        <h2>Fetch</h2>
        {data.length ? data.map((element) => (
            <div key={element.id}>
                {element.title}
            </div>
        )) : <div>No data fetched</div>}
        <button onClick={sendRequest}>Post request</button>
    </div>
  )
}

export default GetDataFetch