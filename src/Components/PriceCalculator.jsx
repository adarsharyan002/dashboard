import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const PriceCalculatorComponent = () => {
  const [invites, setInvites] = useState(0);
  const [duration, setDuration] = useState(0);

  const calculatePrice = () => {
    let price = invites * 10 + duration * 5;
    return price;
  };

  const data = {
    labels: ['Invites', 'Duration'],
    datasets: [
      {
        data: [invites, duration],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div>
      <div>
        <label>
          Number of Invites:
          <input type="range" min="0" max="100" value={invites} onChange={(e) => setInvites(parseInt(e.target.value))} />
          {invites}
        </label>
      </div>
      <div>
        <label>
          Duration of Event (in hours):
          <input type="range" min="0" max="24" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} />
          {duration}
        </label>
      </div>
      <div>
        <h2>Total Price: {calculatePrice()}</h2>
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default PriceCalculatorComponent;
