const CollectionItem = ({
  backdrop,
  title,
}: {
  backdrop: string;
  title: string;
}) => {
  return (
    <div className="w-full h-[160px] overflow-hidden rounded-2xl shadow-lg">
      <img src={backdrop} alt={title} className="w-full h-full object-fill" />
    </div>
  );
};

export default CollectionItem;
