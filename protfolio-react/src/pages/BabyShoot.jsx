import { motion } from "framer-motion";
import Wedding_photos from "../components/Wedding";
import Navbar from "../bar/Navbar";
import Footer from "../components/Footer";

export  default function BabyShoot(){
        const photoArray = [
            
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1766158929/prabhat_photography_assets/sls8tubzvocpyr2ovc6b.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1766158925/prabhat_photography_assets/nr3f46mfoy0yye1icech.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1766158926/prabhat_photography_assets/n0kisf6yjisr3lljdmca.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1766158924/prabhat_photography_assets/nibw2c32uw9ipbjeczim.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1766158925/prabhat_photography_assets/f7nhzwxkuch56gdeuvne.jpg",
           "https://res.cloudinary.com/dvyuzqnvr/image/upload/v1766158924/prabhat_photography_assets/dbrwzvocpdhcbcdjgbku.jpg"

          
];

  
   
   

   
    
    return(
        <>
        <Navbar/>
           
  
       <Wedding_photos photoArray={photoArray}/>
       <Footer/>
        </>
    )
}