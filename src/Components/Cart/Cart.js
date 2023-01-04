import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import "./Cart.css"
const cartElements = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    id: 2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    id: 3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const Cart = (props) => {
  const cartList = cartElements.map((cartt) => (
    <CartItems
      key={cartt.id}
      title={cartt.title}
      price={cartt.price}
      image={cartt.imageUrl}
      quantity={cartt.quantity}
    />
  ));

  return (
    <Modal>
      <div className="section">
        <h2>CART</h2>
        </div>
      <button className="cancel" onClick={props.onCloseCart}>X</button>
      
      <div className="div">
        <h5 className="column ite">ITEM</h5>
        <h5 className="column pric">PRICE</h5>
        <h5 className="column quantit">QUANTITY</h5>
        </div>
      
      <ul>{cartList}</ul>
      <div className="h2">Total $ 34</div>
      <Button >PURCHASE</Button>
    </Modal>
  );
};

export default Cart;
