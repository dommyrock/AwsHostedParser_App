export let barChartOptions = {
  chart: {
    type: "bar",
    backgroundColor: "none",
    height: "100%",
    // width: 600,
  },
  boost: {
    enabled: true,
    usePreallocated: true,
    useGPUTranslations: true,
  },
  tooltip: {
    borderRadius: 10,
    useHTML: true,
    formatter: function () {
      return `${this.series.name}<br>Total compensation <b> ${this.x}</b><p style='color:#42C619;'>$ ${this.y}K</p>`;
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
      borderRadius: 2,
    },
  },
  series: [],
};

//Tooltip customization
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/tooltip/footerformat/
