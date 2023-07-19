import "./Main.css"
import HornedBeasts from "../HornedBeasts/HornedBeasts"

export default function Main({data, handleModal}) {
return (
    <div className="hbMain">
        {data.map((beast, key)=>{
            return(
                <HornedBeasts
                key={beast._id}
                beastObject={beast}
                title={beast.title}
                imgUrl={beast.image_url}
                description={beast.description}
                handleModal={handleModal}
                />
            )
        })}
    </div>
    )
}
