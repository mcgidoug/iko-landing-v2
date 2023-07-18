"use client";

import React from "react";

const Video = () => {
  return (
    <div>
      <iframe
        width={300}
        height={300}
        title="video player"
        src="https://www.youtube.com/embed/4bsqODPzfTQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
