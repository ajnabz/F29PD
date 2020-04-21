import React,{Component} from 'react'
import { Nav, Tabs, Tab, Row, Col, ListGroup, Button, Form, ButtonGroup, Badge, OverlayTrigger, ListGroupItem } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import SectionContainer from './sectionContainer';
import Card from 'react-bootstrap/Card';
class RoomGraph extends Component {
    state = {
      dataLine: {},
    };
   
    componentDidMount() {
      let dataSet_temperature = this.props.data.temperature;
      var dataArray_temperature = dataSet_temperature.split(",", 24);
   
      let dataSet_humidity = this.props.data.humidity;
      var dataArray_humidity = dataSet_humidity.split(",", 24);
   
      const dataLine = {
        labels: [
          "00:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
        ],
        datasets: [
          {
            label: "temperature °C",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataArray_temperature,
          },
          {
            label: "humidity %",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(231, 76, 60)",
            borderColor: "rgba(231, 76, 60)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(231, 76, 60)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(231, 76, 60)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataArray_humidity,
          },
        ],
      };
   
      this.setState({ dataLine: dataLine });
      console.log({dataLine})
    }
   
    render() {
      return (
        <MDBContainer>
          <div className="row">
            <div className="col-lg-6">
              <SectionContainer>
                <Line data={this.state.dataLine} options={{ responsive: true }} />
              </SectionContainer>
            </div>
          </div>
        </MDBContainer>
      );
    }
  }
   
  export default RoomGraph;
