import React from "react";
import RFC from "react-fusioncharts";
import FusionChart from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Chart from "fusioncharts/fusioncharts.charts";

RFC.fcRoot(FusionChart, Chart, FusionTheme);

const Pie3d = (data: any) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        decimals: 0,
        numberSuffix: "%",
        pieRadius: "50%",
        theme: "fusion",
      },
      data: data.data,
    },
  };

  return (
    <div className="pie">
      <RFC {...chartConfigs} />
    </div>
  );
};

export default Pie3d;
