import React from "react";
import RFC from "react-fusioncharts";
import FusionChart from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import Chart from "fusioncharts/fusioncharts.charts";

RFC.fcRoot(FusionChart, Chart, FusionTheme);

const Doughnut = (data: any) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Star Per Language",
        doughnutRadius: "50%",
        decimals: 0,
        showPercentValues: 0,
        showShadow: 0,
        theme: "candy",
      },
      data: data.data,
    },
  };

  return (
    <>
      <RFC {...chartConfigs} />
    </>
  );
};

export default Doughnut;
