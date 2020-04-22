import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdbreact';

const USAGE_VIEW_MODES = { TEXT: 'Todays Usage', VALUE: 'Usage' };

class UsageOnClick extends React.Component {
    state = { viewMode: USAGE_VIEW_MODES.TEXT };

    renderText = () => {
        return (
            <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn color='danger'>
                    <span style={{ color: '#030C49' }}>Todays Usage</span>
                </MDBBtn>
            </MDBBtnGroup>
        );
    };

    renderValue = () => {
        return (<MDBBtnGroup size='lg' className="sidebarButtons">
            <MDBBtn color='danger'>
                <span style={{ color: '#030C49' }}>51 kWh</span>
            </MDBBtn>
        </MDBBtnGroup>
        );
    };

    changeViewMode = () => {
        if (this.state.viewMode === USAGE_VIEW_MODES.VALUE) this.setState({ viewMode: USAGE_VIEW_MODES.TEXT });
        if (this.state.viewMode === USAGE_VIEW_MODES.TEXT) this.setState({ viewMode: USAGE_VIEW_MODES.VALUE });
    };

    render() {
        return (
            <div onClick={this.changeViewMode}>
                {this.state.viewMode === USAGE_VIEW_MODES.TEXT && this.renderText()}
                {this.state.viewMode === USAGE_VIEW_MODES.VALUE && this.renderValue()}
            </div>
        );
    }

}

export default UsageOnClick;
