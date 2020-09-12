import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import hc_accessibility from "highcharts/modules/accessibility";
import hc_3d from "highcharts/highcharts-3d";
import hc_more from "highcharts/highcharts-more";
import hc_boost from "highcharts/modules/boost";
import PropTypes from "prop-types";

//Needed for next appp module registration
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  hc_accessibility(Highcharts);
  hc_3d(Highcharts);
  hc_more(Highcharts);
  hc_boost(Highcharts); //should be last module impored(overrides default functionality)
}
const Chart = ({ options }) => {
  const [state, setState] = useState(options);
  return <HighchartsReact options={state} highcharts={Highcharts} />;
};
Chart.propTypes = {
  options: PropTypes.object,
};
export default Chart;
