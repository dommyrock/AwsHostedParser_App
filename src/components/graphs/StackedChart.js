export let stackedChartOptions = {
  chart: {
    type: "bar",
    backgroundColor: "none",
    // borderRadius: 20,
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    borderRadius: 10,
    useHTML: true,
    formatter: function () {
      return `${this.x} <br><table><tr><td><b> ${this.series.name} </b></td><td>  <b><p style='text-align: right;color:#42C619;'>$ ${this.y}K</p> </b></td><tr/></table>`;
    },
  },
  title: {
    text: "Salary breakdown",
  },
  xAxis: {
    categories: [],
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: "normal",
      animation: false,
      borderRadius: 3,
    },
  },
  series: [
    {
      name: "Salary",
      data: [],
      color: "#3fb1e3",
    },
    {
      name: "Stock",
      data: [],
      color: "#87f7cf",
    },
    {
      name: "Bonus",
      data: [],
      color: "#fc97af",
    },
  ],
};
export let stackedChartOptions2 = {
  chart: {
    type: "bar",
    backgroundColor: "none",
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    borderRadius: 10,
    useHTML: true,
    formatter: function () {
      return `${this.x} <br><table><tr><td><b> ${this.series.name} </b></td><td>  <b><p style='text-align: right;color:#42C619;'>$ ${this.y}K</p> </b></td><tr/></table>`;
    },
  },
  title: {
    text: "Salary breakdown",
  },
  xAxis: {
    categories: [],
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: "normal",
      animation: false,
      borderRadius: 3,
    },
  },
  series: [
    {
      name: "Salary",
      data: [],
      color: "#3fb1e3",
    },
    {
      name: "Stock",
      data: [],
      color: "#87f7cf",
    },
    {
      name: "Bonus",
      data: [],
      color: "#fc97af",
    },
  ],
};
export let stackedChartOptions3 = {
  chart: {
    type: "bar",
    backgroundColor: "none",
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    borderRadius: 10,
    useHTML: true,
    formatter: function () {
      return `${this.x} <br><table><tr><td><b> ${this.series.name} </b></td><td>  <b><p style='text-align: right;color:#42C619;'>$ ${this.y}K</p> </b></td><tr/></table>`;
    },
  },
  title: {
    text: "Salary breakdown",
  },
  xAxis: {
    categories: [],
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: "normal",
      animation: false,
      borderRadius: 3,
    },
  },
  series: [
    {
      name: "Salary",
      data: [],
      color: "#3fb1e3",
    },
    {
      name: "Stock",
      data: [],
      color: "#87f7cf",
    },
    {
      name: "Bonus",
      data: [],
      color: "#fc97af",
    },
  ],
};
