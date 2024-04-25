import React from "react";
import Button from "./button";
import Carousel from "react-bootstrap/Carousel";

function mainBanner() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/p.webp"
            alt="First slide"
            // height={400}
          />
          <Carousel.Caption>
            <Button variant="primary" size="lg">
              Get Started
            </Button>{" "}
            <br /><br />
            <br />
            <h1 style={{ fontWeight: "bolder" }}>
              Order your favorites <br /> with <b>Eat First</b>{" "}
            </h1>
            <p style={{ fontWeight: "bolder" }}>
              Restaurants and more, delivered to your door.Get All of Your
              Favourite Dishes Delivered or Order for Pick Up. Find Great Offers
              Now. Tasty Dishes Delivered.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/f.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <Button variant="primary" size="lg">
              Get Started
            </Button>{" "}
            <br /><br />
            <br />
            <h1 style={{ fontWeight: "bolder" }}>
              Order your favorites <br /> with <b>Eat First</b>{" "}
            </h1>
            <p style={{ color: "green" }}>
              Restaurants and more, delivered to your door.Get All of Your
              Favourite Dishes Delivered or Order for Pick Up. Find Great Offers
              Now. Tasty Dishes Delivered.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/13.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <Button variant="primary" size="lg">
              Get Started
            </Button>{" "}
            <br />
            <br />
            <h1 style={{ fontWeight: "bolder" }}>
              Order your favorites <br /> with <b>Eat First</b>{" "}
            </h1>
            <p style={{ color: "green" }}>
              Restaurants and more, delivered to your door.Get All of Your
              Favourite Dishes Delivered or Order for Pick Up. Find Great Offers
              Now. Tasty Dishes Delivered.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default mainBanner;
