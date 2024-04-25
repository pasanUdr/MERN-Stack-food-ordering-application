import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Register = () => {
  return (
    <>
      <Form style={{ padding: "10%" }}>
        <h1>Register Now!</h1>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter your name here" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" placeholder="07XXXXXXXX" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Nearest city</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Register as</Form.Label>
            <Form.Select defaultValue="Resturant or Customer">
              <option>Resturant</option>
              <option>Customer</option>
            </Form.Select>
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group> */}
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit" size="lg" >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
