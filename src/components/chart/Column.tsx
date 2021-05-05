import React from "react";
import RFC from "react-fusioncharts";
import FusionChart from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Chart from "fusioncharts/fusioncharts.charts";

RFC.fcRoot(FusionChart, Chart, FusionTheme);

const Column = (data: any) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Repo",
        yAxisName: "Star",
        xAxisNameFontSize: "20px",
        yAxisNameFontSize: "20px",
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        theme: "fusion",
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

export default Column;
