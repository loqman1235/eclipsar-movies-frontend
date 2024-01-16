import { motion } from "framer-motion";

interface RevealProps {
  children?: React.ReactNode;
  width: "w-fit" | "w-full";
}

const Reveal: React.FC<RevealProps> = ({ children, width }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={width}
    >
      {children}
    </motion.div>
  );
};
export default Reveal;
