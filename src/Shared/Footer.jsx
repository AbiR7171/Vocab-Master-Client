import React from "react";
import { BiHash } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import img from "../../public/img/logo56aa.png";
const Footer = () => {
  return (
    <div className="mt-20 container mx-auto rounded-lg">
      <footer className="footer p-10 bg-transparent bg-opacity-50 text-white">
        <div>
          base-co
          {/* <BiHash className="text-4xl"></BiHash> */}
          <img src={img} alt="" />
          <h2 className=" font-primary mb-4 lg:mb-0 text-3xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-300">
            𝓥𝓸𝓬𝓪𝓫𝓜𝓪𝓼𝓽𝓮𝓻
          </h2>
          <p>Providing reliable teach since 1992</p>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a href="/aboutUs" className="link link-hover">
            About us
          </a>
          <a href="/contact" className="link link-hover">
            Contact
          </a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div>
          <span className="footer-title">Legal</span>
          <Link to="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookies" className="link link-hover">
            Cookie policy
          </Link>
        </div>

        <div className="">
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 mt-8 ">
            <a href="">
              <FaTwitter className="text-xl"></FaTwitter>
            </a>

            <a href="https://www.facebook.com/groups/1851078738683952">
              <FaFacebookF className="text-xl"></FaFacebookF>
            </a>

            <a href="">
              <FaYoutube className="text-xl"></FaYoutube>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-100 rounded-lg mt-12">
        <div className="text-center">
          <Typewriter
            options={{
              strings: "Copyright © 2023 - All right reserved by VOCABMASTER",
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(500).deleteAll().typeString(" ").start();
            }}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
