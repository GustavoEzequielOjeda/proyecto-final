import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CartWidget = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cartItems } = useContext(CartContext);

  return (
    <div onClick={handleShow} className="cartWidget">
      <FontAwesomeIcon icon={faCartShopping} />
      <strong> {cartItems} </strong>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aquí podras ver los productos que agregaste al carrito:</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartWidget;