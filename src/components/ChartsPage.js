//MDB REACT LIBRARY
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import SectionContainer from '../components/sectionContainer';

const chartData = [0, 1, 5, 10, 10, 10, 18, 30, 45, 40, 33, 22, 10, 10, 10, 10, 10, 20, 33, 45, 42, 55, 30, 23];

// LineChart
const dataLine = {
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
  datasets: [
    {
      label: 'kWh',
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
      data: chartData
    }
  ]
};


// Pie Chart
const dataPie = {
  labels: ['Lighting', 'Cooling and Heating', 'Washer and Dryer', 'Oven', 'Water Heater'],
  datasets: [
    {
      data: [300, 50, 100, 40, 240],
      backgroundColor: [
        '#F7464A',
        '#46BFBD',
        '#FDB45C',
        '#949FB1',
        '#4D5360',
        '#ac64ad'
      ],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774',
        '#da92db'
      ]
    }
  ]
};


const ChartsPage = () => {
  return (
    <React.Fragment>
      <MDBContainer>

        <div className="row">
        
          <div className="col-md-6">

            <SectionContainer header='Used so far today: 51 kWh'>
              <Line data={dataLine} options={{ responsive: true }} />
            </SectionContainer>
          </div>
          <div className="col-md-6">
            <SectionContainer header='Devices used today'>
              <Pie data={dataPie} options={{ responsive: true }} />
            </SectionContainer>
          </div>
        </div>

      </MDBContainer>
    </React.Fragment>
  );
};

export default ChartsPage;

//most popular usage for top 2 rooms
