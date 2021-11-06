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

const CookiesPolicy=()=>{

  const { t } = useTranslation();

  return (
    <Container className={"Primary-container-style"} style={{ minHeight: "auto" }}>
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Grid container item xs={11} justifyContent="center">
          <Box mb={4} fontWeight={400} fontSize={22} textAlign={"center"}>
            {t("PCO")}
          </Box>
        </Grid>
        <Grid container item xs={11} justifyContent="center">
          <Box mb={4} fontWeight={400} fontSize={14} textAlign={"left"}>
            {t("PCO0")}
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
                <b>{t("PCO1")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PCO1.1")}
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
                <b>{t("PCO2")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PCO2.1")}
                <Box/>
                {t("PCO2.2")}
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
                <b>{t("PCO3")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PCO3.1")}
                <Box/>
                {t("PCO3.2")}
                <Box/>
                {t("PCO3.3")}
                <Box/>
                {t("PCO3.4")}
                <Box/>
                {t("PCO3.5")}
                <Box/>
                {t("PCO3.6")}
                <Box/>
                {t("PCO3.7")}
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
                <b>{t("PCO4")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PCO4.1")}
                <Box/>
                {t("PCO4.2")}
                <Box/>
                {t("PCO4.3")}
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
                <b>{t("PCO5")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PCO5.1")}
                <Box/>
                {t("PCO5.2")}
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
                <b>{t("PCO6")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PCO6.1")}
                <Box/>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CookiesPolicy;