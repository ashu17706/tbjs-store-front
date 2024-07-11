"use client";

import { useState, useEffect } from "react";

const Logo = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 500) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <h1 className="text-[28px]">
      <a href="/" className={`${visible ? "hidden" : "block"}`}>
        The Bhavini Johar Store
      </a>
      <a href="/" className="block md:hidden">
        TBJS
      </a>
    </h1>
  );
};

export default Logo;
