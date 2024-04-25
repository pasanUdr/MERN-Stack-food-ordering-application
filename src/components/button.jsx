import React from "react";
import Button from "react-bootstrap/Button";

function button({ variant, size, onClick, children }) {
  return (
    <>
      <Button variant={variant} size={size} onClick={onClick}>
        {children}
      </Button>{" "}
    </>
  );
}
export default button;
