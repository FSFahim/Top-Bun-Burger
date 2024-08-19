import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuComponent = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const onSelectDish = (dish) => {
    setSelectedDish(dish);
    toggleModalOpen();
  };
  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} key={dish.id} onSelectDish={onSelectDish} />;
  });
  return (
    <div className="container">
      <div className="row">
        <CardColumns>{menu}</CardColumns>
        <Modal isOpen={modalOpen}>
          <DishDetail dish={selectedDish} />
          <ModalFooter>
            <Button color="primary" onClick={toggleModalOpen}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default MenuComponent;
