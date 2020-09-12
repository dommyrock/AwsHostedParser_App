import React, { useState } from "react";
import useSWR from "swr";
import { GET_SALARIES } from "../pages/api/graphql/queries";
import { gqlFetcher } from "./api/graphql/prismaClient";
import { testOptions } from "../components/graphs/TestGraph";
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

export default function analytics({ salariesData }) {
  const { data, error } = useSWR([GET_SALARIES, keyVariable], { initialData: salariesData });
  const [state, setState] = useState([]);
  if (error) return <div>Error encountered:{JSON.stringify(error, null, 4)}</div>;
  if (!data) return <div>Loading....</div>;
  let salaryData = getArrayFromJson(data.getSalaryData.Data);

  return (
    <div className="container">
      <div className="container-items">
        {salaryData.map((item, index) => {
          debugger;
          return <li>{item.Company}</li>;
        })}
      </div>
      <Chart options={testOptions} key="test" />
      <Chart options={threeDPieChartOptions} />
      {/* <Chart options={bubbleChartOptions} /> Tmporary disabled to test performance*/}
      <Chart options={stackedChartOptions} />
      <Chart options={groupedChartOptions} />
    </div>
  );
}

export async function getStaticProps(context) {
  const salariesData = await gqlFetcher(GET_SALARIES, keyVariable);
  return { props: { salariesData } };
}
