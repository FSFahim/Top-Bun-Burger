import { Component } from "react";
import { Button, Form, Input } from "reactstrap";
import { connect } from "react-redux";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.dispatch({
      type: "ADD_COMMENT",
      payload: {
        author: this.state.author,
        dishId: this.props.dishId,
        comment: this.state.comment,
        rating: this.state.rating,
      },
    });
    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Your Name"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Your Comment"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <Button type="submit">Submit Comment</Button>
        </Form>
      </div>
    );
  }
}

export default connect()(CommentForm);
