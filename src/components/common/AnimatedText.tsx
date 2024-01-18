import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  animationVars: {
    [key: string]: any;
  };
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, animationVars }) => {
  const words: string[] = text.split(" ");

  return (
      words.map((word, index) => (
        <motion.span className="inline-block" key={index} variants={animationVars}>
          {word}
          {index !== words.length - 1 && <>&nbsp;</>}
        </motion.span>
      ))
  );
};
export default AnimatedText;
