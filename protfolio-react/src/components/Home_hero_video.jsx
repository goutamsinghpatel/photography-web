import './com.css'
export default function  Home_hero_video({src}){
return(<>

    <video autoPlay loop muted playsInline className="back-video">
  <source src={src} type="video/mp4" /></video>


</>
)
}