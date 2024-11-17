import { useState } from "react";
import memeData from "./memeData";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg" // Default image
    });

    // Function to get a random meme image
    function getMemeImage() {
        const memesArray = memeData; // Access the memes array
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const randomMeme = memesArray[randomIndex];
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: randomMeme.url
        }));
    }

    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input
                        id="top-text"
                        className="form--input"
                        type="text"
                        placeholder="Shut up"
                        value={meme.topText}
                        onChange={(e) =>
                            setMeme((prevMeme) => ({
                                ...prevMeme,
                                topText: e.target.value
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input
                        id="bottom-text"
                        className="form--input"
                        type="text"
                        placeholder="and take my money"
                        value={meme.bottomText}
                        onChange={(e) =>
                            setMeme((prevMeme) => ({
                                ...prevMeme,
                                bottomText: e.target.value
                            }))
                        }
                    />
                </div>
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
