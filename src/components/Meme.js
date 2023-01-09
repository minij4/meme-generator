import React from 'react';
import memesData from "../memesData.js"



export default function Meme() {
    const [memeImage, setImage] = React.useState('');

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length);

        setImage(memesArray[randomNumber].url);
    }

    return (
        <main className='meme'>
            <div className="form">
                <input type="text" className="form-input"/>
                <input type="text" className="form-input"/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img class="meme-image" src={memeImage}></img>
        </main>
    );
}








// const [isGoingOut, setIsGoingOut] = React.useState("Yes")
// /**
//  * Challenge: 
//  * - Initialize state for `isGoingOut` as a boolean
//  * - Make it so clicking the div.state--value flips that
//  *   boolean value (true -> false, false -> true)
//  * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//  */
// function changeMind() {
//     setIsGoingOut(prevState => !prevState)
// }

// return (
//     <div className="state">
//         <h1 className="state--title">Do I feel like going out tonight?</h1>
//         <div onClick={changeMind} className="state--value">
//             <h1>{isGoingOut ? "Yes" : "No"}</h1>
//         </div>
//     </div>
// )