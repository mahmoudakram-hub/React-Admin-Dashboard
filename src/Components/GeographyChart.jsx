/** @format */

import { mockGeographyData as data } from "../Data/mockData";
import { ResponsiveChoropleth } from "@nivo/geo";

import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { geoFeatures } from "../Data/mockGeoFeature";
import { useLocation } from "react-router-dom";
const GeographyChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDashboard = useLocation().state.title === "Dashboard";

  return (
    <ResponsiveChoropleth
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: colors.grey[100],
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 4,
            },
            text: colors.grey[100],
          },
        },
        legends: {
          text: { fill: colors.grey[100] },
        },
        tooltip: {
          container: {
            color: colors.primary[400],
            fontSize: "15px",
          },
        },
      }}
      data={data}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor={colors.greenAccent[100]}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.greenAccent[300],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.greenAccent[100],
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

export default GeographyChart;
