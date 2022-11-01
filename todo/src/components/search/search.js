import "./search.css";
import Filter from "../filter";

const Search = () => {
  return (
    <div className="search-container">
      <input type="search" className="search"></input>
      <Filter />
    </div>
  );
};

export default Search;
