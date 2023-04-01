import React, {useState, useEffect} from 'react';
import useFetchData from '../hooks/useFetchData';

const Home = () => {
  const {data, loading, error} = useFetchData("https://api.imgflip.com/get_memes");
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  
  
  const currentMeme =
  data && data.data && data.data.memes
    ? data.data.memes[currentMemeIndex]
    : null;

const handleNextMeme = () => {
  setCurrentMemeIndex(
    (currentMemeIndex + 1) % (data.data.memes.length - 1)
  );
  setTopText("");
  setBottomText("");
};

const handlePreviousMeme = () => {
  setCurrentMemeIndex(
    (currentMemeIndex - 1 + data.data.memes.length) % data.data.memes.length
  );
  setTopText("");
  setBottomText("");
};

  return (
    <div>
      <h1>Meme generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="meme-factory">
        <div className="controls">
            <input
              type="text"
              placeholder="Top Text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Bottom Text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
            <div>
              <button
                onClick={handlePreviousMeme}
                disabled={data.length === 0}
              >
                Prev
              </button>
              <button
                onClick={handleNextMeme}
                disabled={data.length === 0}
              >
                Next
              </button>
            </div>
          </div>
          <div 
          style={{
            backgroundImage: `url(${currentMeme.url})`,
            height: `${currentMeme.height}px`,
            width: `${currentMeme.width}px`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
            
          }} className="meme-image-container">
            
            <div
              className="top-text"
            >
              {topText}
            </div>
            
            <div
              className="bottom-text"
            >
              {bottomText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;