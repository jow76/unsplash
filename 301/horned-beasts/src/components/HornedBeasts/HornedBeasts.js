import { useState } from "react"
import "./HornedBeasts.css"

export default function HornedBeasts({title, imgUrl, description, handlePicClick}) {

    const [likes, setLikes] = useState(0)
    
    function handleLikes(){
        setLikes(likes +1)
    }

    return (
        <div className="hbDiv">
            <h2>{title}</h2>
            <img src={imgUrl} alt={title} onClick={()=>{handlePicClick({title})}}></img>
            <p>{description}</p>
            <span onClick={handleLikes}>Likes: {likes}</span>
        </div>
    )
}
