import './com.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { motion } from 'framer-motion';



export default function About_Home() {
 
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

   
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };


    const photoVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -15 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.0, type: "spring", stiffness: 50 } },
    };
    
    return (
        <>
            <div >
                <div className="flex justify-center mb-10">
                    <img src="/photos/myphotos/lg_about.png" className="w-full max-w-7xl" alt="About section header" />
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center px-4 sm:px-8 lg:px-16">

                    <motion.div
                        className='w-full md:w-1/2 p-4 md:p-0'
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                      
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            "10 Years in the Craft. Capturing the Moments You'll Need Forever."
                        </h1>

                        <p className="mt-5 text-xl sm:text-2xl text-amber-500 flex items-center">
                            Creating memories one shutter click at a time.
                        </p>

                    
                        <div className="mt-8 space-y-4">
                            
                        
                            <motion.a
                               href='https://www.instagram.com/_prabhat_photography_/'
                                className=' flex items-center text-white text-xl sm:text-2xl hover:text-amber-300 transition-colors'
                                variants={itemVariants}
                            >
                                <InstagramIcon className='mr-2' />
                                <span>@prabhat_malvi_photographer</span>
                            </motion.a>

                          
                            <motion.h1 
                                className='text-white text-2xl sm:text-3xl flex items-center hover:text-amber-300 transition-colors'
                                variants={itemVariants}
                            >
                                <PhoneIcon className='mr-2' />
                                <span>8226082672</span>
                            </motion.h1>
                            
                          
                            <motion.div 
                                className='text-white text-lg sm:text-xl flex items-center hover:text-amber-300'
                                variants={itemVariants}
                            >
                                <AddLocationAltIcon className='mr-2' />
                                <a href="https://maps.app.goo.gl/C7CuLjn5zcfPdUju9?g_st=ipc">Location: Balsamud (Kasrawad)</a>
                            </motion.div>
                        </div>
                    </motion.div>

                  
                    <motion.div
                        className='w-full md:w-1/2 flex justify-center p-4 md:p-0'
                        variants={photoVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className='myphotos w-full max-w-lg sm:max-w-lg lg:max-w-lg aspect-square object-cover bg-amber-100 border-8 rounded-full border-amber-200 shadow-xl'>
                           
                        </div>
                    </motion.div>
                </div>
            </div>
            
        </>
    )
}