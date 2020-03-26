import React from 'react';
import { MDBProgress } from 'mdbreact';
import '../App.css';

const Progressbar = (props) => {
  return (
    <div>
      {props.house.map(house => {
        var goal = house.dwelling_progress;
        var percent = 100 - goal;

        return (
          <React.Fragment>
            <MDBProgress material striped value={goal} animated color="default">
              <div style={{ color: "black" }}>Your Goal</div>
            </MDBProgress>
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
