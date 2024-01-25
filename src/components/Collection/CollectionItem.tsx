import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CollectionItemProps {
  poster: string;
  title: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ poster, title }) => {
  return (
    <motion.div className="w-full h-[240px] rounded-2xl overflow-hidden relative">
      <div className="w-full h-full relative">
        <img src={poster} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Overlay */}
      {/*<motion.div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-20 w-full h-full flex items-center justify-center">
        <Link
          to={`/collection/${title}`}
          className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-white"
        >
          <motion.span>
            <MdPlayArrow size={40} />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div> *}
  );
};
export default CollectionItem;
