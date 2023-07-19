import "./Main.css"
import HornedBeasts from "../HornedBeasts/HornedBeasts"
import data from "../../data.json"

export default function Main() {
return (
    <div className="hbMain">
        <HornedBeasts title={data[0].title} imgUrl={data[0].image_url} description={data[0].description} />
        <HornedBeasts title={data[1].title} imgUrl={data[1].image_url} description={data[1].description} />
        <HornedBeasts title={data[2].title} imgUrl={data[2].image_url} description={data[2].description} />
        <HornedBeasts title={data[3].title} imgUrl={data[3].image_url} description={data[3].description} />
        <HornedBeasts title={data[4].title} imgUrl={data[4].image_url} description={data[4].description} />
        <HornedBeasts title={data[5].title} imgUrl={data[5].image_url} description={data[5].description} />
        <HornedBeasts title={data[6].title} imgUrl={data[6].image_url} description={data[6].description} />
        <HornedBeasts title={data[7].title} imgUrl={data[7].image_url} description={data[7].description} />
        <HornedBeasts title={data[8].title} imgUrl={data[8].image_url} description={data[8].description} />
        <HornedBeasts title={data[9].title} imgUrl={data[9].image_url} description={data[9].description} />
        <HornedBeasts title={data[10].title} imgUrl={data[10].image_url} description={data[10].description} />
        <HornedBeasts title={data[11].title} imgUrl={data[11].image_url} description={data[11].description} />
        <HornedBeasts title={data[12].title} imgUrl={data[12].image_url} description={data[12].description} />
        <HornedBeasts title={data[13].title} imgUrl={data[13].image_url} description={data[13].description} />
        <HornedBeasts title={data[14].title} imgUrl={data[14].image_url} description={data[14].description} />
        <HornedBeasts title={data[15].title} imgUrl={data[15].image_url} description={data[15].description} />
        <HornedBeasts title={data[16].title} imgUrl={data[16].image_url} description={data[16].description} />
        <HornedBeasts title={data[17].title} imgUrl={data[17].image_url} description={data[17].description} />
        <HornedBeasts title={data[18].title} imgUrl={data[18].image_url} description={data[18].description} />
        <HornedBeasts title={data[19].title} imgUrl={data[19].image_url} description={data[19].description} />
    </div>
    )
}
