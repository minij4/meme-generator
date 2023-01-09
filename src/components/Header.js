import React from 'react';
import trollface from "../photos/TrollFace.png";


export default function Header() {
    return (
        <header className='header'>
            <div className='header-logo'>
                <img className='header-image' src={trollface}></img>
                <p className='header-text'>Meme Generator</p>
            </div>
            <p className='header-title'>React Course — Project 3</p>
        </header>
    );
}
