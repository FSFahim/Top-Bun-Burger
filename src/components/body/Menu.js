import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuComponent = () => {
  document.title = "Menu";
  const [dishes] = useState(DISHES);
  const [comments] = useState(COMMENTS);
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

  let dishDetail = null;
  if (selectedDish != null) {
    const dishComments = comments.filter((comment) => {
      return comment.dishId === selectedDish.id;
    });
    dishDetail = <DishDetail dish={selectedDish} comments={dishComments} />;
  }

  return (
    <div className="container">
      <div className="row">
        <CardColumns>{menu}</CardColumns>
        <Modal isOpen={modalOpen}>
          {dishDetail}
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
