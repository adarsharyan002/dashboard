
import React from 'react';
import { Line } from 'react-chartjs-2';
import { data } from '../Data/ChartData';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const PointStylingChart = () => {
  return (
    <div className="chart_container">
      <Line
      
       style={{width:'50rem'}}
        data={data}
        width={"100%"}
        
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PointStylingChart;
