"use client";

import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between text-sm">
      <p>Ikonet V2.0</p>
      <a
        className="text-white hover:text-pink-500 cursor-pointer"
        href="mailto:ikoseveta@gmail.com"
      >
        Contact
      </a>
    </div>
  );
};

export default Navbar;
