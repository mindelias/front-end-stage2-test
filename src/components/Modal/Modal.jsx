import React from "react";
import { Col, Row } from "reactstrap";
import "./Modal.scss";
import img1 from "../../common/assets/Group9.png";
import img2 from "../../common/assets/Group 7.png";
import img3 from "../../common/assets/Group 8.png";
import img4 from "../../common/assets/Group 10.png";
import img5 from "../../common/assets/Group 6.png";
import img6 from "../../common/assets/Group 5.png";
 
const ModalPopUp = (props) => {
  const {toggle ,innerToggle} = props;
  return (
    <div className="modals">
      <div class="modal_header">
        <div className="row">
          <Col xs="8" className="left">
            <h5 className="font-weight-bold">Today's Meal</h5>
          </Col>
          <Col xs="4" className="right" onClick={toggle}>
            <a href="#item1">
              <h1 className="text-white font-weight-normal">
                <i class="fas fa-times"></i>
              </h1>
            </a>
          </Col>
        </div>
      </div>

      <div className="modal_body">
        <Row className="align-items-center mb-2">
          <Col xs="4">
            <img src={img1} alt="img1" />
          </Col>
          <Col xs="4">
            <p className="font-weight-normal mt-2 mb-0">Akara and Pap</p>
            <p className="font-weight-light">Carbohydrate</p>
          </Col>
        </Row>
        <Row className="align-items-center mb-2" id="item1">
          <Col xs="4" onClick={innerToggle}>
            <img src={img6} alt="img2" />
          </Col>
          <Col xs="4">
            <p className="font-weight-normal mt-2 mb-0">Gastonton</p>
            <p className="font-weight-light">Carbohydrate</p>
          </Col>
        </Row>
        <Row className="align-items-center mb-2">
          <Col xs="4">
            <img src={img5} alt="img1" />
          </Col>
          <Col xs="4">
            <p className="font-weight-normal mt-2 mb-0">Jollof Rice</p>
            <p className="font-weight-light">Protein</p>
          </Col>
        </Row>
        <Row className="align-items-center mb-2">
          <Col xs="4">
            <img src={img4} alt="img1" />
          </Col>
          <Col xs="4">
            <p className="font-weight-normal mt-2 mb-0">Carleeville</p>
            <p className="font-weight-light">Fat and Oil</p>
          </Col>
        </Row>
        <Row className="align-items-center mb-2">
          <Col xs="4">
            <img src={img2} alt="img1" />
          </Col>
          <Col xs="5">
            <p className="font-weight-normal mt-2 mb-0">South Chesleyton</p>
            <p className="font-weight-light">Vegetable</p>
          </Col>
        </Row>
        <Row className="align-items-center mb-0">
          <Col xs="4">
            <img src={img3} alt="img1" />
          </Col>
          <Col xs="4">
            <p className="font-weight-normal mt-2 mb-0">Port Domenic</p>
            <p className="font-weight-light">Carbohydrate</p>
          </Col>
        </Row>
      </div>
      <Row className="footer justify-content-center align-items-start">
        <div className="footer-black"></div>
      </Row>
    </div>
  );
};

export default ModalPopUp;
