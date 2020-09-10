import React, { useState } from "react";
import useSWR from "swr";
import { GET_SALARIES } from "../pages/api/graphql/queries";
import { gqlFetcher } from "./api/graphql/prismaClient";
import TestGraph from "../components/graphs/TestGraph";
import BubbleChart from "../components/graphs/BubbleChart";
import ThreeDPieChart from "../components/graphs/ThreeDPieChart";

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
      <TestGraph />
      <ThreeDPieChart />
      <BubbleChart />
      Graphs go here<a href="https://www.highcharts.com/demo/3d-column-interactive">charts</a>
    </div>
  );
  //TODO: start with average salaries from top 5
  //https://www.levels.fyi/?compare=Netflix,Amazon,Google,Facebook,Microsoft&track=Software%20Engineer
}

export async function getStaticProps(context) {
  const salariesData = await gqlFetcher(GET_SALARIES, keyVariable);
  return { props: { salariesData } };
}

/**
 * Example
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ]
 }
To access arrays inside arrays, use a for-in loop for each array:

Example
for (i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
 */
