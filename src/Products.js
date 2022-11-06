import React, { useEffect } from "react";
import { fetchProducts } from "./redux/productActions";
import { connect } from "react-redux";
import { addCart, removeCart } from "./redux/cartActions";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { isCarted } from "./utils/isCarted";

function Products({ products, fetchProducts, cart, addCart, removeCart }) {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ maxWidth: "100%", marginTop: "50px" }}>
      {products.loading === true && <Spinner animation="border" />}
      {products.error !== "" && <h2>error while fetching</h2>}
      {/* {products.products.length > 0 &&
        products.products.map((product, i) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <button onClick={() => addCart(product)}>add to cart</button>
          </div>
        ))} */}

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.products.length > 0 &&
          products.products.map((product, idx) => (
            <Col key={product.id}>
              <Card style={{ width: "20rem", marginTop: "30px" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  width="80"
                  height="200"
                  style={{ padding: "20px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description.substring(0, 80)}</Card.Text>
                  <Badge bg="primary">${product.price}</Badge>{" "}
                  <Card.Text>catrgory {product.category}</Card.Text>
                  {isCarted(cart.cart, product) ? (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeCart(product)}
                    >
                      Remove from cart
                    </Button>
                  ) : (
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={() => addCart(product)}
                    >
                      Add to cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addCart: (product) => dispatch(addCart(product)),
    removeCart: (product) => dispatch(removeCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
