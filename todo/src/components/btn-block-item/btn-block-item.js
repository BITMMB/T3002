import "./btn-block-item.css";
import BtnDelete from "../btn-delete";
import BtnImportant from "../btn-important";

const BtnBlockItem = () => {
  return (
    <div className="item-btn">
      <BtnImportant />
      <BtnDelete />
    </div>
  );
};

export default BtnBlockItem;
