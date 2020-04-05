import React from 'react';
import { MDBProgress } from 'mdbreact';
import '../App.css';
import { Row, Col} from 'react-bootstrap';

const Progressbar = (props) => {
  return (
    <div>
      {props.house.map(house => {
        var goal = house.dwelling_progress;
        var percent = 100 - goal;

        return (
          <React.Fragment>

            <Row>
              <Col sm="10">
                  <MDBProgress material striped value={goal} animated color="default">
                  </MDBProgress>
              </Col>
              <Col sm="2">
                <p>Your Goal</p>
              </Col>
            </Row>
            <p>
              Percentage to Goal: {percent}%
            </p>
            
          </React.Fragment>
        );
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
