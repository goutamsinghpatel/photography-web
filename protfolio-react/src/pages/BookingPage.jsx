// BookingPage.jsx
import React, { useState } from "react";
import { motion ,number} from "framer-motion";
import { useContext } from "react";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const cardHover = {
  scale: 1.03,
  translateY: -4,
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
};

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const navigate=useNavigate();
const {backendUrl}=useContext(AppContent);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   let name=form.name;
    let mobile=form.mobile;
  let   message=form.message
const {data}=await axios.post(backendUrl+'/api/auth/sendEmail',{name,mobile,message})
if(data.success){
  toast.success("message send");
  navigate("/")
  
}
else {
  toast.error(data.message);
}
    // Simple fake submit – replace with your backend / email logic
    if (!form.name || !form.mobile || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }
    setStatus("Thank you! Your booking request has been submitted.");
    console.log("Booking data:", form);
    // Reset form
    setForm({ name: "", mobile: "", message: "" });
    console.log(form)
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <motion.div
        className="w-full max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-10 space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Prabhat Studio
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Booking Page
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Capture your best moments with{" "}
            <span className="font-semibold text-sky-400">
              _prabhat_photography_
            </span>
            . Fill the form below and we will contact you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-8 items-start">
          {/* Left: Cards + Image */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950 shadow-xl"
            >
              <motion.img
                src="https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg"
                alt="Booking / Photography"
                className="w-full h-56 md:h-72 object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="p-4 md:p-5 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Booking
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    Let&apos;s plan your next shoot.
                  </p>
                </div>
                <span className="text-[10px] md:text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  Photography · Studio · Events
                </span>
              </div>
            </motion.div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Mobile */}
              <motion.a
                href="tel:8226082672"
                variants={itemVariants}
                whileHover={cardHover}
                whileTap={{ scale: 0.97 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 cursor-pointer transition-shadow backdrop-blur-lg"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-2">
                  Mobile
                </p>
                <p className="text-lg font-semibold tracking-wide">
                  8226082672
                </p>
                <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
                  Tap to call
                </p>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/_prabhat_photography_/"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={cardHover}
                whileTap={{ scale: 0.97 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 cursor-pointer transition-shadow backdrop-blur-lg"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-2">
                  Instagram
                </p>
                <p className="text-sm font-semibold break-all">
                  @_prabhat_photography_
                </p>
                <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
                  Tap to open profile
                </p>
              </motion.a>

              {/* Location */}
              <motion.a
                href="https://www.google.com/maps?q=Prabhat+Studio,+1,+Ram+Mandir+Gali,+Balsamud,+Madhya+Pradesh+451228&ftid=0x3962719b4d1ae093:0xfebc90386967751c&entry=gps"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={cardHover}
                whileTap={{ scale: 0.97 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 cursor-pointer transition-shadow backdrop-blur-lg"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-2">
                  Location
                </p>
                <p className="text-xs md:text-sm font-medium">
                  Prabhat Studio, Ram Mandir Gali,
                  <br />
                  Balsamud, Madhya Pradesh 451228
                </p>
                <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-200">
                  Open in Google Maps
                </p>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Booking form */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl backdrop-blur-xl p-5 md:p-6 lg:p-8 space-y-5"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-1">
                Book Your Shoot
              </h2>
              <p className="text-xs md:text-sm text-slate-400">
                Share your details and a short message about your shoot (date,
                occasion, location, etc.).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </motion.div>

              {/* Mobile */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label
                  htmlFor="mobile"
                  className="block text-xs font-medium text-slate-200"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your shoot (date, type of event, location, etc.)"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none"
                />
              </motion.div>

              {/* Button & status */}
              <motion.div
                variants={itemVariants}
                className="pt-2 space-y-3"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, translateY: -1 }}
                  whileTap={{ scale: 0.97, translateY: 0 }}
                  className="w-full rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-r from-sky-500 via-sky-400 to-blue-500 text-slate-950 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all"
                >
                  Submit Booking Request
                </motion.button>

                {status && (
                  <p className="text-xs text-slate-300">{status}</p>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
