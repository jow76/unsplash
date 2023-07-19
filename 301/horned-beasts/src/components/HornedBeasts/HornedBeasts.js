import "./HornedBeasts.css"

export default function HornedBeasts(props) {
return (
    <div className="hbDiv">
        <h2>{props.title}</h2>
        <img src={props.imgUrl} alt={props.title} onClick={()=>handleModal(props.beastObject)}></img>
        <p>{props.description}</p>
    </div>
    )
}
