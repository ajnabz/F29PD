//MDB REACT LIBRARY

import React from 'react';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import SectionContainer from './sectionContainer';



//var dataArray = dataSet.split(',');
// LineChart
const dataLine = {
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0]
    }
  ]
};


const ChartsPage = () => {
  return (
    <React.Fragment>
      <MDBContainer>

        <div className="row">
          <div className="col-md-6">

            <SectionContainer>
              <Line data={dataLine} options={{ responsive: true }} />
            </SectionContainer>
          </div>
          </div>
        


      </MDBContainer>
    </React.Fragment>
  );
};

export default ChartsPage;

//most popular usage for top 2 rooms


