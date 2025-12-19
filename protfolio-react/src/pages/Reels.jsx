import { motion } from 'framer-motion';

export default function Reels() {
    // Array of your video sources
    const videoSources = [
        "/videos/home/home_reel02.mp4",
        "/videos/home/Prabhat Reel.mp4",
       
    ];

    // Parent container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each video (0.2s)
                delayChildren: 0.3    // Initial delay before first video starts
            }
        }
    };

    // Individual item variants
    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            }
        }
    };

    return (
        <motion.div 
            className="flex flex-wrap justify-center gap-6 p-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible" // "animate" triggers immediately on page load
        >
            {videoSources.map((src, index) => (
                <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="lg:w-80 md:w-80 sm:w-50 max-sm:w-50"
                >
                    <video 
                        className="w-full rounded-5xl shadow-xl" 
                        controls
                        controlsList="nodownload"
                        muted // Adding muted is recommended for auto-playing/loading logic
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            ))}
        </motion.div>
    );
}