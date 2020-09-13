import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { GET_SALARIES } from "../pages/api/graphql/queries";
import { gqlFetcher } from "./api/graphql/prismaClient";
import { bubbleChartOptions } from "../components/graphs/BubbleChart";
import { threeDPieChartOptions } from "../components/graphs/ThreeDPieChart";
import {
  stackedChartOptions,
  stackedChartOptions2,
  stackedChartOptions3,
} from "../components/graphs/StackedChart";
import { groupedChartOptions } from "../components/graphs/StackedGrouped";
import Chart from "../components/graphs/Chart";
import { barChartOptions } from "../components/graphs/graphOptions";

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
//0 entry
//1 mid
//2 senior
function extractSalaryBreakdown(role, seniorityIndex) {
  const entry = role.JobRole["Software Engineer "][seniorityIndex];

  if (entry) {
    const result = {
      name: role.Company,
      salary: parseInt(entry.Salary.match(/\d+\.?\d*/)[0]),
      stock: parseInt(entry.Stock.match(/\d+\.?\d*/)[0]),
      bonus: parseInt(entry.Bonus.match(/\d+\.?\d*/)[0]),
    };
    return result;
  }
  return;
}
function hasRoleData(role, seniorityIndex) {
  const entry = role.JobRole["Software Engineer "][seniorityIndex];
  if (entry) return true;
  return false;
}
function mapChartData(data, target, level) {
  const companies = data.map((item) => item.name);
  const salary = data.map((item) => item.salary);
  const stock = data.map((item) => item.stock);
  const bonus = data.map((item) => item.bonus);
  target.title.text = `${level} lvl Salary breakdown`;
  target.xAxis.categories = companies;
  target.series[0].data = salary;
  target.series[1].data = stock;
  target.series[2].data = bonus;
}
//Fix rerendering of clild 2x
export default function analytics({ salariesData }) {
  const { data, error } = useSWR([GET_SALARIES, keyVariable], { initialData: salariesData });
  const [state, setState] = useState(null);
  if (error) return <div>Error encountered:{JSON.stringify(error, null, 4)}</div>;
  if (!data) return <div>Loading....</div>;

  //this is temporory display (later will extract all this in appsync resolvers !!!!)
  useEffect(() => {
    salariesData = getArrayFromJson(data.getSalaryData.Data);
    let formated = salariesData.map((item) => extractTotalCompensationPerCompany(item));
    barChartOptions.series = formated;
    // console.log(formated);
    setState(barChartOptions);
    let formatedStacked = salariesData.map((item) => extractSalaryBreakdown(item, 0));
    mapChartData(formatedStacked, stackedChartOptions, "Entry");

    let formatedStackedMid = salariesData.map((item) => extractSalaryBreakdown(item, 1));
    mapChartData(formatedStackedMid, stackedChartOptions2, "Mid");

    //needed to filter out twitch wguch had no data
    let formatedStackedSenior = salariesData
      .filter((item) => hasRoleData(item, 2))
      .map((item) => extractSalaryBreakdown(item, 2));
    debugger;

    mapChartData(formatedStackedSenior, stackedChartOptions3, "Senior");

    debugger;
  }, []);
  return (
    <div className="container">
      {state && <Chart options={barChartOptions} key="test" />}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          backgroundColor: "#9fa3a717",
          borderStyle: "solid",
          borderColor: "#fff",
          borderRadius: "10px",
        }}
      >
        {state && <Chart options={stackedChartOptions} key="stacked" />}
        {state && <Chart options={stackedChartOptions2} key="stackedMid" />}
        {state && <Chart options={stackedChartOptions3} key="stackedSenior" />}
      </div>
      <Chart options={threeDPieChartOptions} key="3d" />
      {/* <Chart options={groupedChartOptions} key="grouped" /> */}
      {/* <Chart options={bubbleChartOptions} /> Tmporary disabled to test performance*/}
    </div>
  );
}

export async function getStaticProps(context) {
  const salariesData = await gqlFetcher(GET_SALARIES, keyVariable);
  return { props: { salariesData } };
}
//TODO: Ajax call in Next SSR Hook , and pre render on server ,
//2 Could filter data per value of first salary in Each object in array
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

//Theme Examples
//https://echarts.apache.org/en/theme-builder.html

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
