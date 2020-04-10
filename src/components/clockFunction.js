import React from 'react';
import Clock from 'react-clock';

const CLOCK_VIEW_MODES = { ANALOG: 'analog', DIGITAL: 'digital' };

class ClockFunction extends React.Component {
    state = { viewMode: CLOCK_VIEW_MODES.DIGITAL, time: new Date() };

    intervalId = null;
    renderAnalog = () => {
        return (
            <div style={{ backgroundColor: '#2DBBAD', fontSize: '1.3em' }}>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    };
    renderDigital = () => {
        return (
            <div style={{ backgroundColor: '#2DBBAD' }}>
                <Clock value={this.state.time} size={100} />
            </div>
        );
    };

    changeViewMode = () => {
        if (this.state.viewMode === CLOCK_VIEW_MODES.ANALOG) this.setState({ viewMode: CLOCK_VIEW_MODES.DIGITAL });
        if (this.state.viewMode === CLOCK_VIEW_MODES.DIGITAL) this.setState({ viewMode: CLOCK_VIEW_MODES.ANALOG });
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
          this.setState({
            time: new Date()
          });
        }, 1000);
      }

      componentWillUnmount() {
        clearInterval(this.intervalId);
      }

    render() {
        return (
            <div onClick={this.changeViewMode}>
                {this.state.viewMode === CLOCK_VIEW_MODES.ANALOG && this.renderAnalog()}
                {this.state.viewMode === CLOCK_VIEW_MODES.DIGITAL && this.renderDigital()}
            </div>
        );
    }

}

export default ClockFunction;
