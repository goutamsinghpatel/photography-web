

import { useContext } from "react";
import { AppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function AllUsers() {
  const { userData, adminToken, backendUrl } = useContext(AppContent);
  const navigate = useNavigate();

  const deleteUser = async (email) => {
    try {
      const { data } = await axios.post(backendUrl + "/user-delete", { email });

      if (data.success) {
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Safe users array + remove admin role
  const users = Array.isArray(userData)
    ? userData.filter((user) => user.role !== "admin")
    : [];

  // (Optional) if not logged-in / no token
  if (!adminToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <p className="text-slate-200 text-lg">
          Please login as admin to view all users.
        </p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <p className="text-slate-300 text-lg">No users found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4 md:px-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-8 text-center">
        All Users
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((el, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: id * 0.05 }}
            whileHover={{
              scale: 1.03,
              y: -4,
              boxShadow: "0 0 25px rgba(250, 204, 21, 0.28)",
              borderColor: "#facc15", // yellow glow
            }}
            className="
              relative rounded-2xl border 
              bg-slate-900/70 p-5 shadow-lg overflow-hidden 
              transition-colors duration-300
            "
            // ✅ explicit hex border color so Framer Motion can animate it
            style={{ borderColor: "#334155" }} // slate-700
          >
            {/* Subtle top glow border layer (purely visual) */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-700/40 [mask-image:radial-gradient(circle_at_top,_black,_transparent)]" />

            <div className="relative space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-100 truncate">
                  {el.name || "Unnamed User"}
                </h2>
                <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-600">
                  {el.role || "User"}
                </span>
              </div>

              <p className="text-sm text-slate-400 break-all">
                {el.email}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <button
  className="
    text-xs md:text-sm px-3 py-1.5 rounded-full 
    bg-sky-600/90 hover:bg-sky-500 
    text-white font-medium transition-colors duration-200
  "
  style={{cursor:"pointer"}}
  onClick={() => navigate(`/upload-image?email=${el.email}`)}
>
  Upload Image
</button>


                <button
                  className="
                    text-xs md:text-sm px-3 py-1.5 rounded-full 
                    bg-rose-600/90 hover:bg-rose-500 
                    text-white font-medium 
                    transition-colors duration-200
                  "
                  style={{
                    cursor:"pointer"
                  }}
                 onClick={() => navigate(`/user-images?email=${el.email}`)}
                >
                 show image 
                </button>

                <button
                  className="
                    text-xs md:text-sm px-3 py-1.5 rounded-full 
                    bg-rose-600/90 hover:bg-rose-500 
                    text-white font-medium 
                    transition-colors duration-200
                  "
                  style={{
                    cursor:"pointer"
                  }}
                  onClick={() => deleteUser(el.email)}
                >
                  Delete User
                </button>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
