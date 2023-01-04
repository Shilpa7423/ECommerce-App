import { Button } from "react-bootstrap";
import "./CartItem.css";
import "./CartItem.css";
const CartItems = (props) => {
  return (
    <div >
      <span className="column ite">
        <img className="img" src={props.image} alt="none" />
        <span className="title">{props.title}</span>
        <span className=" column price">${props.price}</span>
        <span className="column quantity">{props.quantity}</span>
        <Button variant="danger">Remove</Button>
      </span>
    </div>
  );
};
export default CartItems;
