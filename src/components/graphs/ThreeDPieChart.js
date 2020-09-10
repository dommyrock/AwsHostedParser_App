import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import hc_accessibility from "highcharts/modules/accessibility";
import hc_3d from "highcharts/highcharts-3d";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  hc_accessibility(Highcharts);
  hc_3d(Highcharts);
}

const options = {
  chart: {
    type: "pie",
    backgroundColor: "none",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  title: {
    text: "Browser market shares at a specific website, 2014",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
    },
  },
  series: [
    {
      type: "pie",
      name: "Browser share",
      data: [
        ["Firefox", 45.0],
        ["IE", 26.8],
        {
          name: "Chrome",
          y: 12.8,
          sliced: true,
          selected: true,
        },
        ["Safari", 8.5],
        ["Opera", 6.2],
        ["Others", 0.7],
      ],
    },
  ],
};
const ThreeDPieChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ThreeDPieChart;
