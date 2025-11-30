import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContent } from "../context/AppContext";
import Login from "./Login";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function UserImages() {
  const { userData } = useContext(AppContent);
  const [selectedImage, setSelectedImage] = useState(null);

  // ⭐ USER NOT LOGGED IN → SHOW LOGIN PAGE
  if (!userData) {
    return <Login />;
  }

  // Safe fallback
  const images = userData?.images ?? [];

  // No images available
  if (images.length === 0) {
    return <p className="text-white text-center mt-8">No images found</p>;
  }

  const downloadImage = async (url) => {
    try {
      const res = await fetch(url, { mode: "cors" });
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "downloaded-image.jpg";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error(error);
      alert("Download me error aa gaya.");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-6 break-inside-avoid-column rounded-lg shadow-xl overflow-hidden group bg-gray-900/60"
          >
            <div className="relative">
              <img
                src={img.url}
                alt={`User Image ${index + 1}`}
                onClick={() => setSelectedImage(img.url)}
                className="w-full h-auto transition group-hover:scale-105 duration-500 cursor-pointer"
              />

              <div className="flex justify-end gap-4 px-3 py-2 bg-black/60">
                <p
                  onClick={() => downloadImage(img.url)}
                  className="text-xs text-white hover:text-yellow-300 cursor-pointer transition"
                >
                  download
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="big"
            className="w-[90%] max-w-3xl rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
