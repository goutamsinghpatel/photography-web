// src/pages/UserImagesPage.jsx
import { useContext, useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { AppContent } from "../context/AppContext";

export default function UserImagesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = new URLSearchParams(location.search).get("email");

  const { userData, backendUrl } = useContext(AppContent);

  // jis user ka email match kare
  const user = useMemo(() => {
    if (!Array.isArray(userData)) return null;
    return userData.find((u) => u.email === email);
  }, [userData, email]);

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (user) {
      // tumhare getData me image: [...] aa raha tha
      const raw =
        (Array.isArray(user.image) && user.image) ||
        (Array.isArray(user.images) && user.images) ||
        [];
      setPhotos(raw);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <p className="mb-4">No user data found for {email}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-slate-700 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleDeleteImage = async (imageId) => {
    try {
      const { data } = await axios.post(backendUrl + "/delete-image", {
        imageId,
      });

      if (data.success) {
        // state se image hata do
        setPhotos((prev) =>
          prev.filter((p) => p.id !== imageId && p._id !== imageId)
        );
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!photos.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <p className="mb-4">No images uploaded for {user.name || email}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-slate-700 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <h1 className="text-xl md:text-2xl font-semibold">
          Photos for {user.name || email}
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-sm"
        >
          Back
        </button>
      </div>

      {/* Yahi par Wedding-wali layout + delete text */}
      <div className="p-4 md:p-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id || photo._id || index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 break-inside-avoid-column rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition duration-300 bg-gray-100"
            >
              <img
                src={photo.url}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto transition duration-500 transform group-hover:scale-105"
                loading="lazy"
              />

              {/* delete text in p tag */}
              <div className="px-3 py-2 bg-black/70 text-right">
                <p
                  className="text-xs text-white inline-block cursor-pointer transition hover:text-yellow-300"
                  onClick={() =>
                    handleDeleteImage(photo.id || photo._id)
                  }
                >
                  delete
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
