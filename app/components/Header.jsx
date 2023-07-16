"use client";

import React from "react";
import Image from "next/image";
import iko1 from "../../public/images/ikoseveta5.png";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaSpotify, FaBandcamp, FaTwitch, FaTiktok } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

const Header = () => {
  return (
    <div>
      <Image src={iko1} width={300} height={300} alt="ikoseveta logo" />
      <AiFillYoutube />
      <AiFillInstagram />
      <FaSpotify />
      <FaBandcamp />
      <FaTwitch />
      <FaTiktok />
      <SiApplemusic />
    </div>
  );
};

export default Header;
