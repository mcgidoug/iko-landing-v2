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
      <div className="flex justify-center">
        <Image src={iko1} width={300} height={300} alt="ikoseveta logo" />
      </div>
      <div className="text-2xl flex flex-row justify-center">
        <a
          className="mx-1"
          href="https://www.youtube.com/channel/UCit-UuOFYPtdx44cjIaPTUg"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube className="text-white hover:text-pink-500 cursor-pointer" />
        </a>
        <a
          className="mx-1"
          href="https://www.instagram.com/ikoseveta/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="text-white hover:text-pink-500 cursor-pointer" />
        </a>
        <a
          className="mx-1"
          href="https://www.tiktok.com/@ikoseveta"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok className="text-white hover:text-pink-500 cursor-pointer" />
        </a>
        <a
          className="mx-1"
          href="https://open.spotify.com/artist/0EAqN6YKRxw7Hfu0UkTAAC"
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify className="text-white hover:text-pink-500 cursor-pointer" />
        </a>
        <a
          className="mx-1"
          href="https://music.apple.com/us/artist/ikoseveta/1455868222"
          target="_blank"
          rel="noreferrer"
        >
          <SiApplemusic className="text-white hover:text-pink-500 cursor-pointer" />
        </a>
        <a
          className="mx-1"
          href="https://ikoseveta.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaBandcamp className="text-white hover:text-pink-500 cursor-pointer" />
        </a>
        {/* <a
          className="mx-1"
          href="https://www.twitch.tv/ikoseveta"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitch className="text-white hover:text-pink-500 cursor-pointer" />
        </a> */}
      </div>
    </div>
  );
};

export default Header;
