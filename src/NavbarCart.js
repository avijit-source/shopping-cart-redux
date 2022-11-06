import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import Drawer from "./Drawer";

function NavbarCart({ cart }) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Drawer>
            <Button variant="light">
              Cart <Badge bg="dark">{cart?.cart.length}</Badge>
            </Button>
          </Drawer>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(NavbarCart);
