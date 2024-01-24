interface CollectionItemProps {
  poster: string;
  title: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ poster, title }) => {
  return (
    <div className="w-full h-[260px] rounded-2xl overflow-hidden">
      <div className="w-full h-full relative">
        <img src={poster} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
export default CollectionItem;
