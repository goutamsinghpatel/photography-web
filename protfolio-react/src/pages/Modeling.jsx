import { motion } from "framer-motion";
import Wedding_photos from "../components/Wedding";
import Navbar from "../bar/Navbar";
import Footer from "../components/Footer";

export  default function Modeling(){
        const photoArray = [
            
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595665/prabhat_photography_assets/hrzexkwax73i6glfawvy.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595670/prabhat_photography_assets/ngr7r7ug4ke4xqxfu6aj.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595675/prabhat_photography_assets/xwgeglcxpwkdcuod81dj.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595674/prabhat_photography_assets/jpfp0dwviypmjfwecqam.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595674/prabhat_photography_assets/xovgow7zrvsamqobrk7c.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595679/prabhat_photography_assets/jjxwwjfb0j11esbfnsbm.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595681/prabhat_photography_assets/qgtbbmpakgmidlsl97hv.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595681/prabhat_photography_assets/prqkkvsf71t1voi1yla5.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595686/prabhat_photography_assets/wj7esjdvq7ctulotxd9i.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1764595688/prabhat_photography_assets/lpcfyw27qget3bgbq8yq.jpg",

          
];

  
   
   

   
    
    return(
        <>
        <Navbar/>
           
  
       <Wedding_photos photoArray={photoArray}/>
       <Footer/>
        </>
    )
}