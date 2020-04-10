import React, { Component } from 'react';
import FontSizeChanger from 'react-font-size-changer';

class FontSize extends Component {
  render() {
    return (
      <div className="app">
        <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}          
        />
        <div id="target">
          <p className="title">This is the title of my target text</p>
          <p className="content">This is the content of my target text</p>
        </div>
      </div>
    );
  }
}

export default FontSize;