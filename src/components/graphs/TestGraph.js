import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const options = {
  chart: {
    type: "bar",
    backgroundColor: "none",
  },
  title: {
    text: "Fruit Consumption",
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
  ],
};
const TestGraph = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TestGraph;
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
 *  */

// <see https://github.com/highcharts/highcharts?ref=stackshare
//https://www.highcharts.com/docs/getting-started/install-from-npm
