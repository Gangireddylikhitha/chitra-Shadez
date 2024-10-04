import ImageCard from "../components/categoryImages";
import { VideoGallery } from "../components/video"
import "../styles/video.scss"
import "../styles/imageCard.scss"

const HomeScreen=()=>{
    return(
<>

<VideoGallery/>

<div className="custom-heading">
<h1>CUSTOM PAINTING</h1>
<h2 className="colour-ideas">We color your ideas into beautiful painting!
</h2>
</div>

<ImageCard/>



</>

    )
}

export default HomeScreen;