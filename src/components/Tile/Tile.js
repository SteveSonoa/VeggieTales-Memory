import React from "react";
import { Col, Row, Container } from "../Grid";

const Tile = props => (
  <Row>
      {props.characters.map(characters => (
        <Col size="lg-3 md-3 sm-3 xs-3" >
          <img src={"./img/" + characters.img + ".jpg"} className="img img-responsive tile" id={characters.id} onClick={() => props.selectCard(characters.id)} />
        </Col>
      ))}
  </Row>
);


export default Tile;
