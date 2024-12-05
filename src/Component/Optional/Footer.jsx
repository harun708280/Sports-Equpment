import React, { useContext } from "react";
import { DarkContext } from "./Theme";
import olp from "./olympic-athlete.json"
import Lottie from "lottie-react";
const Footer = () => {
    const {isDark}=useContext(DarkContext)
  return (
    <div className={isDark?'dark text-white':'bg-base-200'}>
      <footer className="footer w-11/12 mx-auto   p-10">
        <aside>
          <Lottie animationData={olp} 
          className="h-32">

          </Lottie>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className={isDark?'dark text-white':'bg-base-200'}>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
