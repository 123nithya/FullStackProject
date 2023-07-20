import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            // exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            title: {
                text: "Crime Track"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: 20, label: "Personal" },
                    { y: 24, label: "Property" },
                    { y: 20, label: "Statutory" },
                    { y: 14, label: "Inchoate" },
                    { y: 12, label: "White Collar" },
                    { y: 10, label: "Misc" }
                ]
            }]
        }

        return (
            <div style={{ width: '450px', height: '150px' }}>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default Chart;