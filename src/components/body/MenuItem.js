import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <div>
      <Card
        inverse
        style={{ padding: 10, margin: 10, cursor: "pointer" }}
        onClick={() => onSelectDish(dish)}
      >
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.7,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle
            tag="h5"
            style={{ fontSize: 25, fontWeight: "bold", color: "black" }}
          >
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
