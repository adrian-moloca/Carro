import React from 'react';
import {
    Container,
    Box,
    Grid,
    AccordionSummary,
    AccordionDetails,
    Accordion,
    Typography,
  } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTranslation } from "react-i18next";
import "../../../App.css";

const TermsAndConditions=()=>{

    const { t } = useTranslation();

    return (
        <Container className={"Primary-container-style"} style={{ minHeight: "auto" }}>
          <Grid container item xs={12} justifyContent="center" alignItems="center">
            <Grid container item xs={11} justifyContent="center">
              <Box mb={4} fontWeight={400} fontSize={22} textAlign={"center"}>
                {t("TC")}
              </Box>
            </Grid>
            <Grid container item xs={11} justifyContent="center">
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC1")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                      <Box>
                        {t("TC1.1")}
                      </Box>
                      <Box>
                        {t("TC1.2")}
                      </Box>
                      <Box>
                        {t("TC1.3")}
                      </Box>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC2")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC2.1")}
                    <Box/>
                    {t("TC2.2")}
                    <Box/>
                    {t("TC2.3")}
                    <Box/>
                    {t("TC2.4")}
                    <Box/>
                    {t("TC2.5")}
                    <Box/>
                    {t("TC2.6")}
                    <Box/>
                    {t("TC2.7")}
                    <Box/>
                    {t("TC2.8")}
                    <Box/>
                    {t("TC2.9")}
                    <Box/>
                    {t("TC2.10")}
                    <Box/>
                    {t("TC2.11")}
                    <Box/>
                    {t("TC2.12")}
                    <Box/>
                    {t("TC2.13")}
                    <Box/>
                    {t("TC2.14")}
                    <Box/>
                    {t("TC2.15")}
                    <Box/>
                    {t("TC2.16")}
                    <Box/>
                    {t("TC2.17")}
                    <Box/>
                    {t("TC2.18")}
                    <Box/>
                    {t("TC2.19")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC3")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC3.0.1")}
                    <Box/>
                    {t("TC3.0.2")}
                    <Box/>
                    {t("TC3.1")}
                    <Box/>
                    {t("TC3.2")}
                    <Box/>
                    {t("TC3.3")}
                    <Box/>
                    {t("TC3.4")}
                    <Box/>
                    {t("TC3.5")}
                    <Box/>
                    {t("TC3.6")}
                    <Box/>
                    {t("TC3.7")}
                    <Box/>
                    {t("TC3.8")}
                    <Box/>
                    {t("TC3.9")}
                    <Box/>
                    {t("TC3.10")}
                    <Box/>
                    {t("TC3.11")}
                    <Box/>
                    {t("TC3.12")}
                    <Box/>
                    {t("TC3.13")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC4")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC4.1")}
                    <Box/>
                    {t("TC4.2")}
                    <Box/>
                    {t("TC4.3")}
                    <Box/>
                    {t("TC4.4")}
                    <Box/>
                    {t("TC4.5")}
                    <Box/>
                    {t("TC4.6")}
                    <Box/>
                    {t("TC4.7")}
                    <Box/>
                    {t("TC4.8")}
                    <Box/>
                    {t("TC4.9")}
                    <Box/>
                    {t("TC4.10")}
                    <Box/>
                    {t("TC4.11")}
                    <Box/>
                    {t("TC4.12")}
                    <Box/>
                    {t("TC4.13")}
                    <Box/> 
                    {t("TC4.14")}
                    <Box/>
                    {t("TC4.15")}
                    <Box/>
                    {t("TC4.16")}
                    <Box/>
                    {t("TC4.17")}
                    <Box/>
                    {t("TC4.18")}
                    <Box/>
                    {t("TC4.19")}
                    <Box/>
                    {t("TC4.20")}
                    <Box/>
                    {t("TC4.21")}
                    <Box/>
                    {t("TC4.22")}
                    <Box/>
                    {t("TC4.23")}
                    <Box/>
                    {t("TC4.24")}
                    <Box/>
                    {t("TC4.25")}
                    <Box/>
                    {t("TC4.26")}
                    <Box/>
                    {t("TC4.27")}
                    <Box/>
                    {t("TC4.28")}
                    <Box/>
                    {t("TC4.29")}
                    <Box/>
                    {t("TC4.31")}
                    <Box/>
                    {t("TC4.32")}
                    <Box/>
                    {t("TC4.34")}
                    <Box/>
                    {t("TC4.34")}
                    <Box/>
                    {t("TC4.35")}
                    <Box/>
                    {t("TC4.36")}
                    <Box/>
                    {t("TC4.37")}
                    <Box/>
                    {t("TC4.38")}
                    <Box/>
                    {t("TC4.39")}
                    <Box/>
                    {t("TC4.40")}
                    <Box/>
                    {t("TC4.41")}
                    <Box/>
                    {t("TC4.42")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC5")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC5.1")}
                    <Box/>
                    {t("TC5.2")}
                    <Box/>
                    {t("TC5.3")}
                    <Box/>
                    {t("TC5.4")}
                    <Box/>
                    {t("TC5.5")}
                    <Box/>
                    {t("TC5.6")}
                    <Box/>
                    {t("TC5.7")}
                    <Box/>
                    {t("TC5.8")}
                    <Box/>                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC6")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC6.1")}
                    <Box/>
                    {t("TC6.2")}
                    <Box/>
                    {t("TC6.3")}
                    <Box/>                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC7")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC7.1")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC8")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC8.1")}
                    <Box/>
                    {t("TC8.2")}
                    <Box/>
                    {t("TC8.3")}
                    <Box/>
                    {t("TC8.4")}
                    <Box/>
                    {t("TC8.5")}
                    <Box/>
                    {t("TC8.6")}
                    <Box/>
                    {t("TC8.7")}
                    <Box/>
                    {t("TC8.8")}
                    <Box/>
                    {t("TC8.9")}
                    <Box/>
                    {t("TC8.10")}
                    <Box/>
                    {t("TC8.11")}
                    <Box/>
                    {t("TC8.12")}
                    <Box/>
                    {t("TC8.13")}
                    <Box/> 
                    {t("TC8.14")}
                    <Box/>
                    {t("TC8.15")}
                    <Box/>
                    {t("TC8.16")}
                    <Box/>
                    {t("TC8.17")}
                    <Box/>
                    {t("TC8.18")}
                    <Box/>
                    {t("TC8.19")}
                    <Box/>
                    {t("TC8.20")}
                    <Box/>
                    {t("TC8.21")}
                    <Box/>
                    {t("TC8.22")}
                    <Box/>
                    {t("TC8.23")}
                    <Box/>
                    {t("TC8.24")}
                    <Box/>
                    {t("TC8.25")}
                    <Box/>
                    {t("TC8.26")}
                    <Box/>
                    {t("TC8.27")}
                    <Box/>
                    {t("TC8.28")}
                    <Box/>
                    {t("TC8.29")}
                    <Box/>
                    {t("TC8.30")}
                    <Box/>
                    {t("TC8.31")}
                    <Box/>
                    {t("TC8.32")}
                    <Box/>
                    {t("TC8.33")}
                    <Box/>
                    {t("TC8.34")}
                    <Box/>
                    {t("TC8.35")}
                    <Box/>
                    {t("TC8.36")}
                    <Box/>
                    {t("TC8.37")}
                    <Box/>
                    {t("TC8.38")}
                    <Box/>
                    {t("TC8.39")}
                    <Box/>
                    {t("TC8.40")}
                    <Box/>
                    {t("TC8.41")}
                    <Box/>
                    {t("TC8.42")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC9")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC9.1")}
                    <Box/>
                    {t("TC9.2")}
                    <Box/>
                    {t("TC9.3")}
                    <Box/>
                    {t("TC9.4")}
                    <Box/>
                    {t("TC9.5")}
                    <Box/>
                    {t("TC9.6")}
                    <Box/>
                    {t("TC9.7")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC10")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC10.1")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC11")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC11.1")}
                    <Box/>
                    {t("TC11.2")}
                    <Box/>
                    {t("TC11.3")}
                    <Box/>
                    {t("TC11.4")}
                    <Box/>
                    {t("TC11.5")}
                    <Box/>
                    {t("TC11.6")}
                    <Box/>
                    {t("TC11.7")}
                    <Box/>
                    {t("TC11.8")}
                    <Box/>
                    {t("TC11.9")}
                    <Box/>
                    {t("TC11.10")}
                    <Box/>
                    {t("TC11.11")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC12")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC12.1")}
                    <Box/>
                    {t("TC12.2")}
                    <Box/>
                    {t("TC12.3")}
                    <Box/>
                    {t("TC12.4")}
                    <Box/>
                    {t("TC12.5")}
                    <Box/>
                    {t("TC12.6")}
                    <Box/>
                    {t("TC12.7")}
                    <Box/>
                    {t("TC12.8")}
                    <Box/>
                    {t("TC12.9")}
                    <Box/>
                    {t("TC12.10")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC13")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC13.1")}
                    <Box/>
                    {t("TC13.2")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC14")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC14.1")}
                    <Box/>
                    {t("TC14.2")}
                    <Box/>                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC15")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC15.1")}
                    <Box/>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ minWidth: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption" gutterBottom>
                    <b>{t("TC16")}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" display="block" gutterBottom>
                    {t("TC16.1")}
                    <Box/>
                    {t("TC16.2")}
                    <Box/>
                    {t("TC16.3")}
                    <Box/>
                    {t("TC16.4")}
                    <Box/>                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      );

}

export default TermsAndConditions;