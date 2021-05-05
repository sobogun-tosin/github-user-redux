import React from "react";
import RFC from "react-fusioncharts";
import FusionChart from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";
import Chart from "fusioncharts/fusioncharts.charts";

RFC.fcRoot(FusionChart, Chart, FusionTheme);

const Area = (data: any) => {
  const chartConfigs = {
    type: "area2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        xAxisName: "Repo",
        yAxisName: "Star",
        xAxisNameFontSize: "20px",
        yAxisNameFontSize: "20px",
        theme: "gammel",
      },
      data: data.data,
    },
  };

  return (
    <div className="area">
      <RFC {...chartConfigs} />
    </div>
  );
};

export default Area;
