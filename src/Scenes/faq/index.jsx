/** @format */

// /** @format */

import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { tokens } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens([theme.palette.mode]);

  return (
    <Box margin="10px 20px">
      <Accordion sx={{ backgroundColor: colors.greenAccent[300] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" color={colors.primary[400]}>
            An Important Question About Us ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.primary[300],
            "&": {
              boxShadow:
                "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
            },
          }}
        >
          <Typography variant="h3" color={colors.primary[400]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum
            voluptatem maxime, ex veniam perspiciatis ea expedita quidem, vel
            omnis modi inventore esse architecto necessitatibus eius!
            Consectetur eum praesentium iusto.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: colors.greenAccent[300] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" color={colors.primary[400]}>
            An Important Question About Us ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.primary[300],
            "&": {
              boxShadow:
                "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
            },
          }}
        >
          <Typography variant="h3" color={colors.primary[400]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum
            voluptatem maxime, ex veniam perspiciatis ea expedita quidem, vel
            omnis modi inventore esse architecto necessitatibus eius!
            Consectetur eum praesentium iusto.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: colors.greenAccent[300] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" color={colors.primary[400]}>
            An Important Question About Us ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.primary[300],
            "&": {
              boxShadow:
                "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
            },
          }}
        >
          <Typography variant="h3" color={colors.primary[400]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum
            voluptatem maxime, ex veniam perspiciatis ea expedita quidem, vel
            omnis modi inventore esse architecto necessitatibus eius!
            Consectetur eum praesentium iusto.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: colors.greenAccent[300] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" color={colors.primary[400]}>
            An Important Question About Us ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.primary[300],
            "&": {
              boxShadow:
                "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
            },
          }}
        >
          <Typography variant="h3" color={colors.primary[400]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum
            voluptatem maxime, ex veniam perspiciatis ea expedita quidem, vel
            omnis modi inventore esse architecto necessitatibus eius!
            Consectetur eum praesentium iusto.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: colors.greenAccent[300] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" color={colors.primary[400]}>
            An Important Question About Us ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.primary[300],
            "&": {
              boxShadow:
                "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
            },
          }}
        >
          <Typography variant="h3" color={colors.primary[400]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum
            voluptatem maxime, ex veniam perspiciatis ea expedita quidem, vel
            omnis modi inventore esse architecto necessitatibus eius!
            Consectetur eum praesentium iusto.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
