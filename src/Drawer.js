import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { connect } from "react-redux";
import { addCart, removeCart } from "./redux/cartActions";
import ListGroup from "react-bootstrap/ListGroup";

function Drawer({ children, cart, removeCart, addCart }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>{children}</span>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Total bill: ${cart.total} </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {cart &&
              cart.cart.map((p) => (
                <ListGroup.Item key={p.id} className="lists">
                  <div>
                    <p>
                      {p.title} - ${p.price}
                    </p>
                    <Image src={p.image} roundedCircle width={50} height={50} />
                    <div className="d-flex justify-content-start align-items-center">
                      <Button
                        size="sm"
                        variant="dark"
                        onClick={() => addCart(p)}
                      >
                        +
                      </Button>
                      <p className="mx-2 mt-2">{p.qty}</p>
                      <Button
                        size="sm"
                        variant="dark"
                        onClick={() => removeCart(p)}
                      >
                        -
                      </Button>
                    </div>
                    {/* <Button
                      variant="danger"
                      size="sm"
                      className="mx-3"
                      onClick={() => removeCart(p)}
                    >
                      Remove from cart
                    </Button> */}
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (product) => dispatch(addCart(product)),
    removeCart: (product) => dispatch(removeCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
