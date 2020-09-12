export const threeDPieChartOptions = {
  chart: {
    type: "pie",
    backgroundColor: "none",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  boost: {
    enabled: true,
    useGPUTranslations: true,
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
      animation: false,
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
