import React from "react";
import { Button, Card } from "react-bootstrap";
import Details from "./Details";
import { card, img, btn, txt } from "./index";

function NewsItem(props) {
  const { imageUrl, alt, description, title, urlNews } = props;

  return (
    <>
      <Card style={card}>
        <Card.Img style={img} variant="top" src={imageUrl} alt={alt} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={txt}>{description}</Card.Text>
          <Button href={urlNews} target="_blank" style={btn}>
            Read More About
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewsItem;
