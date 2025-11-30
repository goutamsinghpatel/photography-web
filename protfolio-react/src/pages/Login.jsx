import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AppContent } from "../context/AppContext";
import axios from 'axios';
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Login(){
    const navigate=useNavigate();
    const {backendUrl, isLoggedin,setIsLoggedin,adminToken,userData, getUserData}=useContext(AppContent);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [name,setName]=useState("");

    const handleSubmit = async(e) => {

    e.preventDefault();
     axios.defaults.withCredentials=true;
    if(adminToken){
      const {data}=await axios.post(backendUrl+'/api/auth/register',{name,email,password});

      if(data.success){
        setIsLoggedin(true)
        navigate('/')
        getUserData();
      }
      else{
        toast.error(data.message);
      }
    }
    else{
           axios.defaults.withCredentials=true;
      const  {data}=await axios.post(backendUrl+'/api/auth/login',{email,password});
      if(data.success){
        setIsLoggedin(true);
        navigate("/")

        getUserData()
      
        
      }
      else{
        toast.error(data.message);
      }

    }
  };
   
return(
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Glow background circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md px-8 py-10 rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-[0_20px_60px_rgba(15,23,42,0.85)] backdrop-blur-xl"
      >
        
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
           {adminToken ? "Register" : "Welcome" }
          </h1>
          <p className="mt-2 text-sm text-slate-300">
           {adminToken ?"create one acount" : "Sign in to your account to continue."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* name */}
           {adminToken && <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-200"
            >
              name
            </label>
            <input
              id="name"
              type="text"
             onChange={e=>setName(e.target.value)}
             value={name}
              required
              className="w-full rounded-xl border border-slate-600/70 bg-slate-900/70 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-400 transition"
              placeholder="Enter your name "
            />
          </div>}
          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
             onChange={e=>setEmail(e.target.value)}
             value={email}
              required
              className="w-full rounded-xl border border-slate-600/70 bg-slate-900/70 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-400 transition"
              placeholder="you@example.com"
            />
          </div>
        

          {/* Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-200"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
             onChange={e=>setPassword(e.target.value)}
             value={password}
              required
              className="w-full rounded-xl border border-slate-600/70 bg-slate-900/70 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-400 transition"
              placeholder="••••••••"
            />
          </div>

        

      
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-2 w-full rounded-xl border border-indigo-400/70 bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(79,70,229,0.55)] focus:outline-none focus:ring-2 focus:ring-indigo-400/80"
          >
            Sign in
          </motion.button>
        </form>

       
      </motion.div>
    </div>

    </>
)
}




