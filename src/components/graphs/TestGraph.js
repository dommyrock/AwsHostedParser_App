export const testOptions = {
  chart: {
    type: "bar",
    backgroundColor: "none",
  },
  boost: {
    enabled: true,
    useGPUTranslations: true,
  },
  title: {
    text: "Test chart",
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
  },
  series: [
    {
      name: "Jane",
      data: [1, 0, 4],
    },
    {
      name: "John",
      data: [5, 7, 3],
    },
    {
      name: "John2",
      data: [22, 17, 2],
    },
    {
      name: "John3",
      data: [15, 11, 13],
    },
  ],
};

// in react
/**
 * Options DOCS
 * https://api.highcharts.com/highcharts/
 *
 * https://www.highcharts.com/blog/tutorials/highcharts-wrapper-for-react-101/
 *
 * dashboard
 * https://www.highcharts.com/blog/tutorials/highcharts-react-wrapper-dashboard/
 *
 * github
 * https://github.com/highcharts/highcharts-react#highcharts-with-nextjs
 *
 *
 * PERFORMANCE :
 * https://www.highcharts.com/docs/advanced-chart-features/boost-module
 * https://www.highcharts.com/blog/news/52-serverside-generated-charts/
 *  */

// <see https://github.com/highcharts/highcharts?ref=stackshare
//https://www.highcharts.com/docs/getting-started/install-from-npm

/**OPTIMAL WAY TO UPDATE DATA W HOOKS
 * 
 * import React, { useState } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineChart = () => {
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: ['A', 'B', 'C'],
    },
    series: [
      { data: [1, 2, 3] }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e){
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  const updateSeries = () => {
    setChartOptions({ 
      series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
    });
  }

  return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
        <h3>Hovering over {hoverData}</h3>
        <button onClick={updateSeries}>Update Series</button>
      </div>
    )
}

render(<LineChart />, document.getElementById('root'));

 */
