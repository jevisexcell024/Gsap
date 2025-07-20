import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav ref={navRef}>
      <div className="logo">Animal</div>
      <ul className="nav-links">
        <li><a href="#about">Habitants</a></li>
        <li><a href="#projects">Library</a></li>
        <li><a href="#contact">Species</a></li>
        <li><a href="#contact">Forum</a></li>
      </ul>
      <div className="hamburger">
        <button>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
