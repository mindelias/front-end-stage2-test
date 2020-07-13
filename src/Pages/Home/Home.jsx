import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.scss";
import example from "../../common/variable.scss";
import pfImage from "../../common/assets/Capture1.PNG";
import statusBar from "../../common/assets/Capture12.PNG";
import call from "../../common/assets/Capture13.PNG";
import play from "../../common/assets/Capture14.PNG";
import chat from "../../common/assets/chat.png";
import spag from "../../common/assets/spag.png";
import SmallCards from "../../components/Cards/smallCards";
import ModalPopUp from "../../components/Modal/Modal";

function Home() {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const innerToggle = () => {
    setNestedModal(!nestedModal);
    console.log("i was clicked");
  };

  return (
    <div className="container">
      <Container className="bg-white inner-cont3">
        <Row className="justify-content-between">
          <Col xs="10">
            <p className="f-bold1">9:41</p>
          </Col>
          <Col className="" xs="2">
            <img src={statusBar} alt="status-bar" />
          </Col>
        </Row>
      </Container>
      <Container className="inner-container1">
        <Row className="justify-content-start mb-2">
          <Col xs="2">
            <img className="img-left" src={pfImage} alt="pfImage" />
          </Col>
          <Col xs="8" className="mt-3">
            <p className="f-bold1">Good Morning slim!</p>
          </Col>
        </Row>
        <Row className="justify-content-start mb-2">
          <Col xs="6">
            <h4 className="font-weight-bold">Schedule</h4>
          </Col>
          <Col xs="6">
            <button className="btn-like">Reconfigure services</button>
          </Col>
        </Row>
        <SmallCards
          text1="Your account is inactive"
          text2="offer until June 23"
          text3="15% off"
          text4="N75,000"
          text5="Pay N62,800"
          color1={example.lightGreen}
          color2={example.green}
        />
        <SmallCards
          text1="View your meals for the"
          text2="week"
          text3=""
          text4=""
          text5="Check 'em"
          color1={example.lightYellow}
          color2={example.yellow}
          toggle={toggle}
        />
        <Row className="big-card">
          <Col className="font-weight-bold txt-1" xs="12">
            Getting Started
          </Col>
          <Col className="font-weight-light txt-2" xs="12">
            Lets answer any questions you have left!
          </Col>
          <Col xs={{ size: 5, offset: 1 }} className="mt-4">
            <img className="mb-2" src={call} alt="call"></img>
            <p className="mb-3">
              Set up a call with <br /> your gardener
            </p>
            <p className="mb-3 pOne">Do it &rarr;</p>
          </Col>
          <Col xs={{ offset: 1 }} className="mt-4">
            <img className="mb-2" src={play} alt="call"></img>
            <p className="mb-3">
              {" "}
              Lose yourself to
              <br /> this video
            </p>
            <p className="mb-3 pTwo">Play &rarr;</p>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs="12" className="green mb-3">
            Tommorrow
          </Col>
          <Col className="align-self-center txt-2" xs="2">
            9-10am
          </Col>
          <Col className="big-card py-2 px-3" xs="10">
            <p className="txt-2 font-weight-normal">
              Your cleaner is coming in to give your apartment the looks
            </p>
          </Col>
          <Col xs="12" className="green mt-3">
            Friday July, 27
          </Col>
        </Row>
      </Container>
      <Container className="inner-container2">
        <Row className="justify-content-around align-row align-items-start mb-1">
          <Col>
            <span className="green">
              <i class="far fa-calendar-alt"></i>
            </span>
          </Col>
          <Col className="span">
            <span className="grey">
              <i class="fas fa-history"></i>
            </span>
          </Col>
          <Col className="span">
            <span className="grey">
              {" "}
              <i class="far fa-bell"></i>
            </span>
          </Col>
          <Col>
            <span className="mr-4 grey">
              <img src={chat} alt="chat" />
            </span>
          </Col>
        </Row>
        <Row className="justify-content-around align-items-start">
          <Col className="span">Schedule</Col>
          <Col className="span">History</Col>
          <Col className="span">Notifications</Col>
          <Col className="span">Chat</Col>
        </Row>
      </Container>
      {modal && (
        <Container className="modal-container">
          <ModalPopUp
            toggle={toggle}
            modal={modal}
            innerToggle={innerToggle}
            nestedModal={nestedModal}
          />
          {nestedModal && (
            <Container className="nested-container" onClick={innerToggle}>
              <div className='img-container'>
                <img className={!nestedModal?'close':""} src={spag} alt="nested" />
              </div>
            </Container>
          )}
        </Container>
      )}
    </div>
  );
}

export default Home;
