import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";

const DishDetail = ({ dish, comments }) => {
  return (
    <div>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: "100%",
          }}
          top
          width="100%"
        />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText>{dish.price}/-</CardText>
          <hr />
          <LoadComments comments={comments} />
          <hr />
          <CommentForm dishId={dish.id} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
