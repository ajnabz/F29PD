import React from 'react';
import { MDBProgress } from 'mdbreact';
import '../App.css';

const Progressbar = (props) => {
  return (
    <React.Fragment>
      <MDBProgress material striped value={75} animated color="default">
        <div style={{color:"black"}}>Your goal</div>
      </MDBProgress>
    </React.Fragment>
  );
};

export default Progressbar;


/*
<Progress animated color="success" value={25} />
<Progress animated color="info" value={50} />
<Progress animated color="warning" value={75} />
<Progress animated color="danger" value="100" />
*/
