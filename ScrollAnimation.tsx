"use client";

import { Fade } from "react-awesome-reveal";
import { FC, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
}

const ScrollAnimation: FC<ScrollAnimationProps> = ({ children, delay = 0 }) => {
  return (
    <Fade direction="up" delay={delay} triggerOnce fraction={0.2}>
      {children}
    </Fade>
  );
};

export default ScrollAnimation;