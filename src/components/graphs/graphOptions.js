export let barChartOptions = {
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
