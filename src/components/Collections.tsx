import { collectionsData } from "../data";
import Collection from "./Collection";

const Collections = () => {
  return (
    <div className="w-full relative">
      {collectionsData.map((collection) => (
        <Collection key={collection._id} {...collection} />
      ))}
    </div>
  );
};
export default Collections;
