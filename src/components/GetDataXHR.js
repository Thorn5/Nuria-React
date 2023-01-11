import React, {useEffect, useState} from 'react'

function GetDataXHR () {
    const [data, setData] = useState([])
    console.log(data, 'data');
    useEffect(() => {

        let xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // Configure it: GET-request for the URL

        xhr.send(); // Send the request over the network

        console.log(xhr);

        xhr.onreadystatechange = function () { // This will be called after the response is received
            if (xhr.readyState === 4 && xhr.status === 200) { // analyze HTTP status of the response
                setData(JSON.parse(xhr.responseText)); // Transform the responseText (text from the server) into JSON
            }
        };

        xhr.onerror = function () {
        console.log('Request failed'); // error during the call
        };

    }, [])
    
  return (
    <div>
        <h2>XHR</h2>
        {data.length ? data.map((element) => (
            <div key={element.id}>
                {element.title}
            </div>
        )) : <div>No data fetched</div>}
    </div>
  )
}

export default GetDataXHR