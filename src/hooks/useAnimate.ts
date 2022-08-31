import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

type TProps = {
  id: string;
  from: Object;
  to: Object;
};

export const useAnimate = ({ id, from, to }: TProps) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setAnimation();
  }, []);

  const setAnimation = () => {
    gsap.fromTo(id, from, to);
  };
};