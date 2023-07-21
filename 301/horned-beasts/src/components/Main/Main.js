import React from "react";
import "./Main.css"
import HornedBeasts from "../HornedBeasts/HornedBeasts"

export default function Main({beastData, handleModal}) {

    function handlePicClick(hello){
        console.log(hello)
    }

return (
    <div className="hbMain">
        {beastData.map((beast)=>{
            return(
                <HornedBeasts
                key={beast._id}
                // beastObject={beast}
                title={beast.title}
                imgUrl={beast.image_url}
                description={beast.description}
                // handleModal={handleModal}
                handlePicClick={handlePicClick}
                />
            )
        })}
    </div>
    )
}
