import "./card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function CardComponent({ item, cartItems, setCartItems }) {
  const handleAddToCart = () => {
    console.log(item.id); // log the id of the item
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="card-comp col-md-3">
      <Card style={{ width: "18rem", border: 0 }} className="text-center">
        <Card.Img variant="top" src={item.images[0]} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Price: ${item.price}</Card.Text>
          <Button variant="primary" className="bt" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function CardList({ items, maxItems }) {
  const [cartItems, setCartItems] = useState([]);
  const max = items.length;
  const maxToMap = maxItems ? Math.min(maxItems, max) : max;

  return (
    <div className="container-fuild">
      <div className="row">
        {items.slice(0, maxToMap).map((item) => (
          <CardComponent
            key={item.id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
