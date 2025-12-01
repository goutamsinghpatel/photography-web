import Navbar from "../bar/Navbar"
import Image from "../bar/image"
import About_Home from '../components/About_Home'
import Home_Hero from "../components/Home_Hero"
import Footer from "../components/Footer"
import Home_hero_video from "../components/Home_hero_video"
import Reels_sound from "../components/Reels_sound"
import { motion } from "framer-motion"; 
export  default function Home(){
  
  
  const captionAnimationVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 }, 
  };

    return(
        <>
        <Navbar/>
        <Image img={"/photos/bg_photo.jpg"}/>
        <About_Home/>
        <div className="mt-5">
          <Home_Hero />
          </div>
        <div className="w-full h-full  flex lg:justify-evenly md:justify-evenly sm:justify-center max-sm:justify-center mt-2   flex-wrap !bg-white/10" >
           <Reels_sound src="/videos/home/Prabhat Reel.mp4"/> 
           <Reels_sound src="/videos/home/home_reel02.mp4"/>
 </div>
           <motion.h2
          className="text-4xl text-center md:text-5xl font-bold text-amber-400 my-4"
          variants={captionAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          “Two hearts, one love, forever bound.”
        </motion.h2>
        <Home_hero_video src={"/videos/home/home_reel01.mp4"}/>

        <Footer/>
        </>
    )
}