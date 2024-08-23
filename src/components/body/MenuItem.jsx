import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import { baseURL } from "../../redux/baseURL";

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <div>
      <Card
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={() => onSelectDish(dish)}
      >
        <CardBody>
          <CardImg
            width="100%"
            alt={dish.name}
            src={baseURL + dish.image}
            style={{ opacity: "0.7" }}
          />
          <CardImgOverlay>
            <CardTitle style={{ fontWeight: "Bold" }}>{dish.name}</CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
