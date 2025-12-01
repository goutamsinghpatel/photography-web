
import { motion } from "framer-motion"; 
import Home_hero1 from "./Home_hero1";


export default function Home_Hero({ image }) {
  
  const imageAnimationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  
  const captionAnimationVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 }, 
  };

  return (
    <>
      <Home_hero1 image={"/photos/HomePage/home-page10.jpg"} />
      <div>
        <div className="mt-8 flex flex-wrap justify-evenly">
        
          <motion.div
            className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem] rounded-2xl hover:shadow-xl shadow-white/20"
            variants={imageAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1.5,
            }}
          >
            <img
              className="lg:w-full md:w-full sm:w-full rounded-2xl h-[35rem]"
              src="/photos/HomePage/home-page01.jpg"
              alt="Home Page 01"
            />
          </motion.div>

       
           <motion.div
            className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem] rounded-2xl hover:shadow-xl shadow-white/20"
            variants={imageAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1.5,
            }}
          >
            <img
              className="lg:w-full md:w-full sm:w-full rounded-2xl h-[35rem]"
              src="/photos/HomePage/home-page06.jpg"
              alt="Home Page 01"
            />
          </motion.div>
        </div>
      </div>

     
      <div className="text-center my-16 px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-amber-400 my-4"
          variants={captionAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          “Two hearts, one love, forever bound.”
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-amber-600 my-4"
          variants={captionAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          “Our forever begins today.”
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-amber-800 my-4"
          variants={captionAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          “The start of our happily ever after.”
        </motion.h2>
      </div>
     

      <Home_hero1 image={"/photos/HomePage/home-page05.jpg"} />
      <div>
        <div className="mt-8 flex flex-wrap justify-evenly">
        
          <motion.div
            className="w-[30rem] rounded-2xl"
            variants={imageAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1.5,
            }}
          >
            <img
              className="w-full rounded-2xl h-[35rem]"
              src="/photos/HomePage/home-page04.jpg"
              alt="Home Page 04"
            />
          </motion.div>

    
          <motion.div
            className="w-[35rem] rounded-2xl"
            variants={imageAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1.5,
              delay: 0.2,
            }}
          >
            <img
              className="w-full md:mt-5 sm:mt-5 rounded-2xl h-[35rem]"
              src="/photos/HomePage/homepage09.jpg"
              alt="Home Page 09"
            />
          </motion.div>
        </div>
      </div>

    
      <div className="text-center my-16 px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-200 my-4"
          variants={captionAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          “Tied the knot and sealed it with love.”
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-neutral-500 my-4"
          variants={captionAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          “Together is a beautiful place to be.”
        </motion.h2>
      </div>
    </>
  );
}