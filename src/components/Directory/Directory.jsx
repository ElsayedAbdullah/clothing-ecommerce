import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";
import './Directory.scss'

const Directory = () => {
  const categories = useSelector(state=> state.directory)

  return (
    <div className="directory">
      {categories.map(({id, ...otherSectionProps}) => (
        <CategoryItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
