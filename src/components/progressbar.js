import React from 'react';
import { MDBProgress } from 'mdbreact';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import { FacebookIcon, FacebookShareButton, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon } from 'react-share';

const Progressbar = (props) => {
  return (
    <div>
      {props.house.map(house => {
        var goal = 50;
        var current = 50;
        var percent = goal - current;
        var progressPercent = 100 - percent;
        const code = house.dwelling_code;
        const HE = true;
        const SM = false;

        function yourGoal() {
          if (current !== goal) {
            if (HE === true) {
              return (
                <span>Your Goal: {goal}kWh</span>
              );
            } else if (SM === true) {
              return (
                <span>Your Goal: £{goal}</span>
              );
            }
          } else if (current === goal) {

            return (
              <React.Fragment>
                <span style={{fontSize: '1.20em', fontWeight:"bold"}}>GOAL!</span>
              </React.Fragment>
            );
          }
        }

        function socialMedia() {
          if (HE === true) {
            if (current === goal) {
              return (
                <React.Fragment>

                  <div class="iconTable">
                    <div class="iconChild">

                      <div class="iconChildInner"> <FacebookShareButton url={"https://flonne.me/"} quote={`I just reached my goal of saving ${goal}kWh of energy with Öko!`} className="share">
                        <FacebookIcon size={32} round={true}></FacebookIcon>
                      </FacebookShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><WhatsappShareButton url={"https://flonne.me/"} title={`I just reached my goal of saving ${goal}kWh of energy with Öko!`} className="share">
                        <WhatsappIcon size={32} round={true}></WhatsappIcon>
                      </WhatsappShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><TwitterShareButton url={"https://flonne.me/"} title={`I just reached my goal of saving ${goal}kWh of energy with Öko!`} hashtags={["okosmart", "okoenergy"]} className="share">
                        <TwitterIcon size={32} round={true}></TwitterIcon>
                      </TwitterShareButton></div>
                    </div>
                  </div>

                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>

                  <div class="iconTable">
                    <div class="iconChild">

                      <div class="iconChildInner"> <FacebookShareButton url={"https://flonne.me/"} quote={`I have currently saved ${current}kWh of energy with Öko!`} className="share">
                        <FacebookIcon size={32} round={true}></FacebookIcon>
                      </FacebookShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><WhatsappShareButton url={"https://flonne.me/"} title={`I have currently saved ${current}kWh of energy with Öko!`} className="share">
                        <WhatsappIcon size={32} round={true}></WhatsappIcon>
                      </WhatsappShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><TwitterShareButton url={"https://flonne.me/"} title={`I have currently saved ${current}kWh of energy with Öko!`} hashtags={["okosmart", "okoenergy"]} className="share">
                        <TwitterIcon size={32} round={true}></TwitterIcon>
                      </TwitterShareButton></div>
                    </div>
                  </div>

                </React.Fragment>
              );
            }


          } else if (SM === true) {
            if (current === goal) {
              return (
                <React.Fragment>

                  <div class="iconTable">
                    <div class="iconChild">

                      <div class="iconChildInner"> <FacebookShareButton url={"https://flonne.me/"} quote={`I just reached my goal of saving £${goal} with Öko!`} className="share">
                        <FacebookIcon size={32} round={true}></FacebookIcon>
                      </FacebookShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><WhatsappShareButton url={"https://flonne.me/"} title={`I just reached my goal of saving £${goal} with Öko!`} className="share">
                        <WhatsappIcon size={32} round={true}></WhatsappIcon>
                      </WhatsappShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><TwitterShareButton url={"https://flonne.me/"} title={`I just reached my goal of saving £${goal} with Öko!`} hashtags={["okosmart", "okoenergy"]} className="share">
                        <TwitterIcon size={32} round={true}></TwitterIcon>
                      </TwitterShareButton></div>
                    </div>
                  </div>

                </React.Fragment>
              );

            } else {
              return (
                <React.Fragment>

                  <div class="iconTable">
                    <div class="iconChild">

                      <div class="iconChildInner"> <FacebookShareButton url={"https://flonne.me/"} quote={`I have currently saved £${current} with Öko!`} className="share">
                        <FacebookIcon size={32} round={true}></FacebookIcon>
                      </FacebookShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><WhatsappShareButton url={"https://flonne.me/"} title={`I have currently saved £${current} with Öko!`} className="share">
                        <WhatsappIcon size={32} round={true}></WhatsappIcon>
                      </WhatsappShareButton></div>
                    </div>
                    <div class="iconChild">
                      <div class="iconChildInner"><TwitterShareButton url={"https://flonne.me/"} title={`I have currently saved £${current} with Öko!`} hashtags={["okosmart", "okoenergy"]} className="share">
                        <TwitterIcon size={32} round={true}></TwitterIcon>
                      </TwitterShareButton></div>
                    </div>
                  </div>

                </React.Fragment>
              );
            }
          }
        }

        if (code === "XYZ-ABC") {
          if (HE === true) {
            return (
              <React.Fragment>

                <Row>
                  <Col sm="10">
                    <MDBProgress material striped value={progressPercent} animated color="default" height="23px">
                      <span style={{ fontSize: '1.25em', color: 'black', fontWeight: 'bold' }}>Percentage to Goal: {percent}%</span>
                    </MDBProgress>
                  </Col>
                  <Col sm="2">
                    <div>{yourGoal()}</div>
                  </Col>
                </Row>
                <div>{socialMedia()}</div>
                <br></br>
              </React.Fragment>
            );
          }


          if (SM === true) {
            return (
              <React.Fragment>

                <Row>
                  <Col sm="10">
                    <MDBProgress material striped value={progressPercent} animated color="default">
                      <span style={{ fontSize: '1.25em' }}>Percentage to Goal: {percent}%</span>
                    </MDBProgress>
                  </Col>
                  <Col sm="2">
                    <div>{yourGoal()}</div>
                  </Col>
                </Row>
                <div>{socialMedia()}</div>
                <br></br>
              </React.Fragment>
            );
          }

        }
      })}
    </div>
  )
};

export default Progressbar;


/*
<Progress animated color="success" value={25} />
<Progress animated color="info" value={50} />
<Progress animated color="warning" value={75} />
<Progress animated color="danger" value="100" />
*/
