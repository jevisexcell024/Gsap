import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.set(".wildlife-image", { autoAlpha: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      },
    });

    timeline
      .to(".image-1", { autoAlpha: 1, duration: 1 })
      .to(".image-1", { autoAlpha: 0, duration: 1 }, "+=1")
      .to(".image-2", { autoAlpha: 1, duration: 1 }, "-=1")
      .to(".image-2", { autoAlpha: 0, duration: 1 }, "+=1")
      .to(".image-3", { autoAlpha: 1, duration: 1 }, "-=1");
  }, []);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1>Welcome to the Wilderness</h1>
        <p>Experience the beauty of nature through a scroll-triggered animation.</p>
      </section>
      <section className="animation-section">
        <div className="wildlife-image image-1"></div>
        <div className="wildlife-image image-2"></div>
        <div className="wildlife-image image-3"></div>
      </section>
      <section className="content-section">
        <h2>Explore the Animal Kingdom</h2>
        <p>Our planet is home to a vast array of wildlife, each with its own unique story. From the majestic lion to the cunning fox, every creature plays a vital role in the intricate web of life.</p>
      </section>
    </div>
  );
};



export default LandingPage;
