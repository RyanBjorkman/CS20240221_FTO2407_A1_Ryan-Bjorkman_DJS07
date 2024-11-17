// This component handles the main functionality of the app: 
// displaying a random meme and allowing users to add top and bottom text.
import React from "react";

export default function Meme() {
    // State to manage the current meme image and text.
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" // Default image
    });

    // State to hold the list of all memes fetched from the API.
    const [allMemes, setAllMemes] = React.useState([]);

    /**
     * useEffect is used to fetch meme data from the API.
     * Since async functions return a promise, we define the async function inside
     * and call it immediately to avoid returning a promise.
     */
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []); // Empty dependency array ensures this runs only once.

    // Function to select a random meme from the fetched memes and update the state.
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    // Function to handle input changes and update the corresponding state fields.
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            {/* Form for entering top and bottom text and generating new memes */}
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            {/* Displaying the meme image and overlaying text */}
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Generated Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}