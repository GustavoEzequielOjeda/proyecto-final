import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";

import "../../App.css";

const ItemDetailContainer = ({ productData }) => {
  const [stock, setStock] = React.useState(10);
  const [onAdd, setOnAdd] = React.useState(false);

  return (
    <div className="containerCardDetail">
      <Card className="cardDetail">
        <Card.Img variant="top" src={productData.thumbnail} />
        <Card.Body>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>{productData.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${productData.price}</ListGroup.Item>
          <ListGroup.Item>{productData.rating}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ItemCount />
          {stock >= 5 ? (
            <strong>Stock disponible</strong>
          ) : (
            <strong>Ultimas unidades disponibles!</strong>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
