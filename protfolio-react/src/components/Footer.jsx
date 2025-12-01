import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import {NavLink} from 'react-router-dom';

const Footer = () => {
 
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },

  ];

  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/_prabhat_photography_/', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://www.facebook.com/prabhat.malvi.3/', label: 'Facebook' },
    { icon: CiLocationOn, href: 'https://maps.app.goo.gl/C7CuLjn5zcfPdUju9?g_st=ipc', label: 'Location' },
    { icon: FaEnvelope, href: 'mailto:prabhatmalvi@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-5">
          {/* Logo/Studio Name Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white tracking-wider">
              Prabhat  Studio
            </h3>
            <p className="mt-4 text-sm max-w-xs">
              Capturing moments with light and vision. Specializing in wedding, portrait, and commercial photography.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li><NavLink to="/wedding-shoot" className="text-sm hover:text-white transition-colors duration-200">Wedding</NavLink></li>
              <li><NavLink to="/Pre-Wedding" className="text-sm hover:text-white transition-colors duration-200">Pre-wedding</NavLink></li>
              <li><NavLink to="/reels" className="text-sm hover:text-white transition-colors duration-200">reels</NavLink></li>
              <li><NavLink to="/Baby-shoot" className="text-sm hover:text-white transition-colors duration-200">Baby-shoot</NavLink></li>
                            <li><NavLink to="/modeling" className="text-sm hover:text-white transition-colors duration-200">modeling</NavLink></li>

            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">
                  Phone: +91 8226082672
                </a>
              </li>
              <li>
                <a href="mailto:info@prabhatmalvistudio.com" className="hover:text-white transition-colors duration-200">
                  Email: prabhatmalvi@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <span className="font-semibold text-white">Studio Location:</span> <br/>
                [kasrawad/Balsamud]
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-10 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              &copy; {currentYear} **Prabhat Malvi Studio**. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Link to ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;