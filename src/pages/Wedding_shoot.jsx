import { motion } from "framer-motion";
import Wedding_photos from "../components/Wedding";
import Navbar from "../bar/Navbar";
import Footer from "../components/Footer";

export  default function Wedding_shoot(){
        const photoArray = [
            "/photos/wedding photos/wedding01.jpg",
            "/photos/wedding photos/wedding06.jpg",
            "/photos/wedding photos/wedding04.jpg",
           "/photos/wedding photos/wedding03.JPG",
           "/photos/wedding photos/wedding003.jpg",
          "/photos/wedding photos/wedding02.jpg",
            "/photos/wedding photos/wedding05.jpg",
             "/photos/wedding photos/wedding07.jpg",
           "/photos/wedding photos/wedding002.JPG",
           "/photos/wedding photos/wedding08.jpg",
          "/photos/wedding photos/wedding0012.jpg",
           "/photos/wedding photos/wedding09.jpg",
           "/photos/wedding photos/wedding00.jpg",
           "/photos/wedding photos/wedding001.jpg",
           "/photos/wedding photos/wedding004.jpg",
           "/photos/wedding photos/wedding005.jpg",
           "/photos/wedding photos/wedding006.JPG",
           "/photos/wedding photos/wedding007.jpg",
           "/photos/wedding photos/wedding008.jpg",
           "/photos/wedding photos/wedding009.PNG",
           "/photos/wedding photos/wedding0011.jpg",

             
 
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
                        className='w-full md:w-1/2 p-4 md:p-0 '
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                      
                        <h1 className="text-amber-400   text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                          "The day we promised forever. Two souls, finally home.
                        </h1>

                       
</motion.div>
  
       <Wedding_photos photoArray={photoArray}/>
       <Footer/>
        </>
    )
}