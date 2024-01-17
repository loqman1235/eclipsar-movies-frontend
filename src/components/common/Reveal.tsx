import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children?: React.ReactNode;
  width: "w-fit" | "w-full";
}

const Reveal: React.FC<RevealProps> = ({ children, width }) => {
  const controls = useAnimation();
  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef, { once: true });
  const variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={targetRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={width}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
