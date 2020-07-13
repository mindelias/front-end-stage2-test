import "./smallCards.scss";
import "../../common/variable.scss";
import { Row, Col } from "reactstrap";

import React from "react";

function SmallCards({ text1, text2, text3, text4, text5, color1, color2, toggle}) {
  return (
    <Row className='mb-3'>
      <Col xs="8" className="left" style={{ backgroundColor: `${color1}` }}>
        <p>
          {text1}
          <br />
          <strong className="font-weight-bold mr-1">{text3}</strong>
          {text2}
        </p>
      </Col>
      <Col
        xs="4"
        onClick={toggle}
        className="right"
        style={{ backgroundColor: `${color2}` }}
      >
        <p className='text-white font-weight-normal'>
          <span>{text4}</span> <br/>{text5}
        </p>
      </Col>
    </Row>
  );
}

export default SmallCards;
