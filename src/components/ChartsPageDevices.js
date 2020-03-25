//MDB REACT LIBRARY

import React from 'react';
import { Polar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';


// Polar Chart
const dataPolar = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      label: 'My dataset', // for legend
    }
  ],
  labels: ['Lighting', 'Cooling and Heating', 'Washer and Dryer', 'Oven', 'Water Heater']
};



const ChartsPage = () => {
  return (
    <React.Fragment>
      <MDBContainer>

        <div className="row" style={{paddingTop:'7%'}}>
          <div>
            <Polar data={dataPolar} options={{ responsive: true }} />
          </div>
        </div>

      </MDBContainer>
    </React.Fragment>
  );
};

export default ChartsPage;

