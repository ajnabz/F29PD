//MDB REACT LIBRARY
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import SectionContainer from '../components/sectionContainer';


function ChartsPage(props) {

  const chartData = [20, 26, 39, 53, 28, 34, 51];


  // LineChart
  const dataLine = {
    labels: ['16/04', '17/04', '18/04', '19/04', '20/04', '21/04', '22/04'],
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
    labels: ['Google Home', 'Samsung Smart TV', 'TV', 'Light', 'Toaster', 'Light'],
    datasets: [
      {
        data: [32, 55, 52, 46, 23, 43],
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


  return (
    <div>
      <MDBContainer>

        <div className="row">

          <div className="col-md-6">

            <h3 style={{ color: 'black' }}>Used so far this week: 251 kWh</h3>
            <SectionContainer>
              <Line data={dataLine} options={{ responsive: true }} />
            </SectionContainer>
          </div>
          <div className="col-md-6">
            <h3 style={{ color: 'black' }}>Devices used this week</h3>
            <SectionContainer>
              <Pie data={dataPie} options={{ responsive: true }} />
            </SectionContainer>
          </div>
        </div>
      </MDBContainer>
    </div>
  );

}

export default ChartsPage;

//most popular usage for top 2 rooms
