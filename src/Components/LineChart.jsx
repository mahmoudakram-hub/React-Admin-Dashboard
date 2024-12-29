/** @format */

import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../Data/mockData";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const LineChart = () => {
  const isDashboard = useLocation().state.title === "Dashboard";
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        crosshair: {
          line: {
            stroke: colors.greenAccent[300],
            strokeWidth: 3,
          },
        },
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 3,
            },
          },
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            fontSize: "15px",
          },
        },
        text: {
          fill: colors.greenAccent[400],
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      enableGridX={false}
      enableGridY={false}
      enableArea={isDashboard}
      margin={
        isDashboard
          ? { top: 10, right: 0, bottom: 30, left: 30 }
          : { top: 10, right: 50, bottom: 30, left: 50 }
      }
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
        tickValues: 5,
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default LineChart;
