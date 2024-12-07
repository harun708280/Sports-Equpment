import React, { useContext } from "react";
import { DarkContext } from "./Theme";
import olp from "./olympic-athlete.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const { isDark } = useContext(DarkContext);
  return (
    <div className="dark:bg-slate-800" >
      <footer class="   py-8">
        <div class="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0 text-center md:text-left flex flex-col items-center">
            <Lottie animationData={olp} className="w-52 h-32"></Lottie>
            <h2 class="text-2xl font-bold">Sports Zone</h2>
          </div>

          <div class="mb-4 md:mb-0 text-center">
            <h3 class="font-semibold text-lg">Contact Us</h3>
            <p>Email: contact@sportszone.com</p>
            <p>Phone: +1 (880) 456-7890</p>
          </div>

          <div class="flex space-x-4 text-2xl">
            <a
              href="https://www.facebook.com/groups/missionwebdevelopment10/?sorting_setting=CHRONOLOGICAL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-600">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.facebook.com/groups/missionwebdevelopment10/?sorting_setting=CHRONOLOGICAL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-blue-700">
                <FaFacebook></FaFacebook>
              </span>
            </a>
            <a
              href="https://www.facebook.com/groups/missionwebdevelopment10/?sorting_setting=CHRONOLOGICAL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-blue-500">
                <FaTwitter></FaTwitter>
              </span>
            </a>

            
          </div>
        </div>
        <div className="divider"></div>
        <p class=" text-center">
          &copy; 2024 SportsZone. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
