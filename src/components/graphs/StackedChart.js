export let stackedChartOptions = {
  chart: {
    type: "bar",
    backgroundColor: "none",
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    formatter: function () {
      return this.x + "<br>" + this.series.name + "</b>  <b>" + this.y + "K $" + "</b>";
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
    },
  },
  series: [
    {
      name: "Salary",
      data: [],
    },
    {
      name: "Stock",
      data: [],
    },
    {
      name: "Bonus",
      data: [],
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
    formatter: function () {
      return this.x + "<br>" + this.series.name + "</b>  <b>" + this.y + "K $" + "</b>";
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
    },
  },
  series: [
    {
      name: "Salary",
      data: [],
    },
    {
      name: "Stock",
      data: [],
    },
    {
      name: "Bonus",
      data: [],
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
    formatter: function () {
      return this.x + "<br>" + this.series.name + "</b>  <b>" + this.y + "K $" + "</b>";
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
    },
  },
  series: [
    {
      name: "Salary",
      data: [],
    },
    {
      name: "Stock",
      data: [],
    },
    {
      name: "Bonus",
      data: [],
    },
  ],
};
