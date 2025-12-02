import { useContext, useState } from 'react';

import './bar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink, useNavigate} from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';



// Tailwind classes for link items
const navLinkClasses = 'text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out';

const Navbar= () => {
  const navigate=useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const {isLoggedin,setIsLoggedin,backendUrl,userData,setUserData,adminToken,setAdminToken}= useContext(AppContent);
  const logout=async()=>
  {
 try {
     axios.defaults.withCredentials=true;
const {data}=await axios.post(backendUrl+'/api/auth/logout')
if(data.success){
setIsLoggedin(false);

setUserData(false)

setAdminToken(false);


   navigate("/")

   


}
else{
  toast.error(data.message);
}
   
  
 } catch (error) {
  toast.error(error.message);
  
 }
    
  }
  const showUserData=async()=>{
    try {
      if(adminToken){
        navigate('/All-users')
      }
      else {
        navigate("/images")
      }
      
    } catch (error) {
      toast.error(error.message);
      
    }

  }

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesDropdownOpen(false); 
  };

  // Function to toggle services dropdown (for mobile)
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  
  // Handlers for desktop dropdown (hover)
  const handleMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };


  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex items-center  justify-evenly  h-16">
          
          {/* Logo and Desktop Links */}
          <div className="flex items-center   ">
            {/* Logo placeholder - Replace with your image */}
            <NavLink to="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold  "><img className="h-10 w-70 max-lg:w-40 "  src="/photos/prabhat photographylogo.png"></img></span> 
         
            </NavLink>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:block   ">
              <div className="ml-10 flex items-baseline space-x-4 gap-2 ">
                <NavLink to="/about" className={navLinkClasses}>About</NavLink>
                
                {/* Services Dropdown - Desktop */}
                <div 
                  className="relative" 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`${navLinkClasses} flex items-center`}>
                    Services
                  
                  </button>
                  
                  {isServicesDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="services-menu">
                       <NavLink to="/Wedding-shoot" className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                         >Wedding-shoot</NavLink>
                  <NavLink to="/Pre-Wedding" className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                          >Pre-Wedding</NavLink>
                   
          
                 
                  <NavLink to="/Reels" className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                         >Reels</NavLink>
                   <NavLink to="/modeling" className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                        >Modeling-Shoot</NavLink>
                    <NavLink to="/Baby-Shoot" className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                          >Baby-Shoot</NavLink>

                      </div>
                    </div>
                  )}
                </div>
              <NavLink to="/Booking" className={navLinkClasses}>Book <StarBorderPurple500Icon/></NavLink>
                {userData?<> < p style={{ cursor:"pointer" }}onClick={showUserData} className={navLinkClasses}> <AccountCircleIcon/> </p> 
              {adminToken && <NavLink to="/login" className={navLinkClasses}> New user</NavLink> }
                 <p onClick={logout} 
                className={navLinkClasses} style={{ cursor:"pointer"
                }}>Log-out <LogoutIcon/></p></> : <NavLink to="/login" className={navLinkClasses}><AccountCircleIcon/></NavLink>}
               
                
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Right side */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? 
              <CloseIcon/>
               : 

      <MenuIcon/>
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/about" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</NavLink>
            
            {/* Services Dropdown - Mobile Toggle */}
            <div className="relative">
              <button 
                onClick={toggleServicesDropdown}
                className="text-white hover:bg-gray-700  w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
              >
                Services
              </button>

              {isServicesDropdownOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  <NavLink to="/Wedding-shoot" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Wedding-shoot</NavLink>
                  <NavLink to="/Pre-Wedding" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Pre-Wedding</NavLink>
                  <NavLink to="/Reels" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Reels</NavLink>
                   <NavLink to="/modeling" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Modeling-Shoot</NavLink>
                    <NavLink to="/Baby-Shoot" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Baby-Shoot</NavLink>
                </div>
              )}
            </div>
             <NavLink to="/Booking" className={navLinkClasses}>Book <StarBorderPurple500Icon/></NavLink>
             <br></br>
           {userData?<> < p style={{ cursor:"pointer" }} onClick={showUserData} className={navLinkClasses}> <AccountCircleIcon/> </p> 
              {adminToken && <NavLink to="/login" className={navLinkClasses}> New user</NavLink> }
                 <p onClick={logout} 
                className={navLinkClasses} style={{ cursor:"pointer"
                }}>Log-out <LogoutIcon/></p></> : <NavLink to="/login" className={navLinkClasses}><AccountCircleIcon/></NavLink>}
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
