import DISHES from "../data/dishes";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuComponent = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const onSelectDish = (dish) => {
    setSelectedDish(dish);
  };
  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} key={dish.id} onSelectDish={onSelectDish} />;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">{menu}</div>
        <div className="col-7">
          <DishDetail dish={selectedDish} />
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
