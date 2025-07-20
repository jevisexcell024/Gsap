import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    ).fromTo(
      textRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 },
      "-=1"
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 ref={addToRefs}>Protect Wildlife, Preserve Life</h1>
        <p ref={addToRefs}>
          Discover the beauty and importance of animals in our ecosystem.
        </p>
        <button ref={addToRefs}>Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
