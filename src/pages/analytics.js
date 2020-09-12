import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { GET_SALARIES } from "../pages/api/graphql/queries";
import { gqlFetcher } from "./api/graphql/prismaClient";
import { bubbleChartOptions } from "../components/graphs/BubbleChart";
import { threeDPieChartOptions } from "../components/graphs/ThreeDPieChart";
import { stackedChartOptions } from "../components/graphs/StackedChart";
import { groupedChartOptions } from "../components/graphs/StackedGrouped";
import Chart from "../components/graphs/Chart";

const keyVariable = {
  Company: "SalaryData",
};

function getArrayFromJson(data) {
  const parsedOnce = JSON.parse(data);
  const parsedArray = JSON.parse(parsedOnce);

  return parsedArray;
}
function extractTotalCompensationPerCompany(role) {
  const roles = role.JobRole["Software Engineer "];
  return {
    name: role.Company,
    data: roles.map((item) => parseInt(item.TotalCompensation.match(/\d+\.?\d*/)[0])).slice(0, 5),
  };
}
let testData = {
  chart: {
    type: "bar",
    backgroundColor: "none",
    height: "100%",
  },
  boost: {
    enabled: true,
    usePreallocated: true,
    useGPUTranslations: true,
  },
  tooltip: {
    formatter: function () {
      return (
        this.series.name +
        "<br>Total compensation <b>" +
        this.x +
        "</b> is <b>" +
        this.y +
        "K $" +
        "</b>"
      );
    },
  },
  title: {
    text: "Average SWE salaries across top companies",
  },
  xAxis: {
    categories: ["Entry lvl", "Mid lvl", "Senior lvl", "Staff SWE", "Senior Staff SWE"],
  },
  plotOptions: {
    series: {
      animation: false,
    },
  },
  series: [],
};
//Fix rerendering of clild 2x
export default function analytics({ salariesData }) {
  const { data, error } = useSWR([GET_SALARIES, keyVariable], { initialData: salariesData });
  const [state, setState] = useState(null);
  if (error) return <div>Error encountered:{JSON.stringify(error, null, 4)}</div>;
  if (!data) return <div>Loading....</div>;

  useEffect(() => {
    salariesData = getArrayFromJson(data.getSalaryData.Data);
    let formated = salariesData.map((item) => extractTotalCompensationPerCompany(item));
    testData.series = formated;
    setState(testData);
  }, []);
  return (
    <div className="container">
      {state && <Chart options={testData} key="test" />}
      <Chart options={threeDPieChartOptions} key="3d" />
      <Chart options={stackedChartOptions} key="stacked" />
      <Chart options={groupedChartOptions} key="grouped" />
      {/* <Chart options={bubbleChartOptions} /> Tmporary disabled to test performance*/}
    </div>
  );
}

export async function getStaticProps(context) {
  const salariesData = await gqlFetcher(GET_SALARIES, keyVariable);
  return { props: { salariesData } };
}
//TODO: Ajax call in Next SSR Hook , and pre render on server ,
//also prepare json data to be exactly whats needed in dynamo (divide each charts data into separate key,value))

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
 * https://www.highcharts.com/docs/working-with-data/custom-preprocessing
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
