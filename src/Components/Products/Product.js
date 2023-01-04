import { Button } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="list">
      <h4>{props.title}</h4>
      <img src={props.image} alt="none" />
      <h4>${props.price}</h4>
      <Button variant="primary">Add to Cart</Button>
    </div>
  );
};
export default Product;
