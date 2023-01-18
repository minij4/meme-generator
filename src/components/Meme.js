import React from 'react';
import memesData from "../memesData.js"



export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",     
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);


    function getMemeImage() {
        const memesObject = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random()*memesObject.length);

        const url = memesObject[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(meme);
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}





