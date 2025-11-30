
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContent=createContext();
export const AppContextProvider=(props)=>{
    axios.defaults.withCredentials=true;
        const backendUrl=import.meta.env.VITE_BACKEND_URL
        const[isLoggedin,setIsLoggedin]=useState(false);
         const[userData,setUserData]=useState(false);
         const[adminToken,setAdminToken]=useState(false);
         const getAuthState=async()=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/auth/is-auth')
            if(data.success){
                setIsLoggedin(true);
                getUserData();
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
         }
    const getUserData=async()=>{
        try {
            const {data}=await axios.get(backendUrl+'/data')
       
            if(data.success){
              if(data.users){
                  const adminUser=data.users[0];
                  if(adminUser.role==='admin'){
                    setAdminToken(true);
                    setUserData(data.users);
                  }
              }
              
                else{
                    setUserData(data.userData);
                }
               
            }
            
            
            
        } catch (error) {
            toast.error(error.message);
            
        }

    }
     useEffect(()=> {

getAuthState();

},[])
    const value={
        backendUrl,
        isLoggedin,setIsLoggedin,
        userData,setUserData,
        adminToken,setAdminToken,
        getUserData
    

    }
    return(
        <AppContent.Provider value={value}>
            {props.children}
           
             
        </AppContent.Provider>

    )
}