import { motion } from "framer-motion";
import Wedding_photos from "../components/Wedding";
import Navbar from "../bar/Navbar";
import Footer from "../components/Footer";
import Image from "../bar/image";

export  default function preWedding(){
        const photoArray = [
           
            "/photos/pre wedding/prewedding02.jpg",
            "/photos/pre wedding/prewedding03.jpg",
           "/photos/pre wedding/prewedding04.jpg",
           "/photos/pre wedding/prewedding05.jpg",
         "/photos/pre wedding/prewedding06.jpg",
           "/photos/pre wedding/prewedding07.jpg",
             "/photos/pre wedding/prewedding08.jpg",
           "/photos/pre wedding/prewedding09.jpg",
          "/photos/pre wedding/prewedding10.jpg",
         "/photos/pre wedding/prewedding11.jpg",
          "/photos/pre wedding/prewedding12.jpg",
           "/photos/pre wedding/prewedding13.jpg",
          "/photos/pre wedding/prewedding14.jpg",
           "/photos/pre wedding/prewedding15.jpg",
          "/photos/pre wedding/prewedding16.jpg",
           "/photos/pre wedding/prewedding17.jpg",
         "/photos/pre wedding/prewedding18.jpg",
           "/photos/pre wedding/prewedding19.jpg",
           "/photos/pre wedding/prewedding20.jpg",
           "/photos/pre wedding/prewedding21.jpg",
         "/photos/pre wedding/prewedding22.jpg",
 "/photos/pre wedding/prewedding23.jpg",
      "/photos/pre wedding/prewedding24.jpg",
      "/photos/pre wedding/prewedding25.jpg",





             
 
];

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut",
             
                staggerChildren: 0.2 
            } 
        },
    };

   
 

   
    
    return(
        <>
        <Navbar/>
      
           <motion.div   
                        className='w-full  '
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                      
                      
                       
    <Image img={    "/photos/pre wedding/prewedding01.jpg"}/>

                       
</motion.div>

  
       <Wedding_photos photoArray={photoArray}/>
       <Footer/>
        </>
    )
}