
import { motion } from 'framer-motion';

export default function Reels_sound({ src }) {
    
    const slideUpVariants = {
        hidden: { 
            opacity: 0, 
            y: 50, 
        },
   
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut"
            }
        },
    };

    return (
        <>
 
            <motion.video 
                className="lg:w-80 md:w-80 sm:w-50 max-sm:w-50 rounded-5xl shadow-xl" 
                controls
                controlsList="nodownload"
       
                initial="hidden"       
                whileInView="visible"   
                variants={slideUpVariants}
                
           
                viewport={{ 
                    once: true,    
                    amount: 0.5    
                }}
            >
                <source src={src} type="video/mp4" />
            </motion.video>
        </>
    );
}