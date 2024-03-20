import React, { useState } from "react";
import { BsInstagram, BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import headerLogoWhite from "../assets/12.svg";
import headerLogoBlack from "../assets/7_1.svg";

import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div
      id="selects"
      className="flex w-full justify-between items-center h-20 px-4 absolute z-10 navbar"
    >
      <div className="w-40 md:w-40 lg:w-40 ">
        <Link to="/">
          <img
            src={isAboutPage ? headerLogoBlack : headerLogoWhite}
            alt="Logo"
            className="w-full h-auto "
          ></img>
        </Link>
      </div>
      <ul className="hidden xl:flex justify-between space-x-6 ">
        <li>
          <NavLink to="/about">À PROPOS</NavLink>
        </li>
        <li>
          <NavLink to="/prestation">PRESTATION</NavLink>
        </li>
        <li>RENDEZ-VOUS</li>
        <li>TARIFS</li>
        <li>CONTACT</li>
      </ul>
      <div className="flex icon-container">
        <BsInstagram size={25} />
        <BiSearch className="" size={25} />
        <BsPerson size={25} />
        {/* Hamburger */}
        <div onClick={handleNav} className="xl:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="border-b">À Propos</li>
          <li className="border-b">PRESTATION</li>
          <li className="border-b">RENDEZ-VOUS</li>
          <li className="border-b">TARIFS</li>
          <li className="border-b">CONTACT</li>
          <div className="flex flex-col">
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
