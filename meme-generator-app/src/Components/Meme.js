import memeData from '../memeData';
import {useState} from 'react'

export default function Meme() {
   function handleClick() {
     const memesArray = allMemeImages.data.memes
     const randomNumber = Math.floor (Math.random() * memesArray.length)
     const url = memesArray[randomNumber].url
     setMeme(prevMeme => {
        return {
            ...prevMeme,
            randomImage: url
        }
     })
    }
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memeData)

    return (
        <div>
            <div className = 'form'>
                <div className = 'form-input'>
                    <label className ='label-id'>Top Text
                        <input className = 'form-input-btn' type='text'/>
                    </label> 
                    <label className='label-id'>Bottom Text
                        <input className = 'form-input-btn' type='text'/>
                    </label> 
                </div>
                <button onClick={handleClick} className = 'form-button'>Get a new meme image 🖼</button>
                <img src={meme.randomImage} alt='meme Image' className='meme-image'/>
            </div>
        </div>
    )
}