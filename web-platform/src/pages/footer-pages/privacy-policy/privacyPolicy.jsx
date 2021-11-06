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

const PrivacyPolicy=()=>{

  const { t } = useTranslation();

  return (
    <Container className={"Primary-container-style"} style={{ minHeight: "auto" }}>
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Grid container item xs={11} justifyContent="center">
          <Box mb={4} fontWeight={400} fontSize={22} textAlign={"center"}>
            {t("PC")}
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
                <b>{t("PC1")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                    {t("PC1.1")}
                  <Box/>
                    {t("PC1.2")}
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
                <b>{t("PC2")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC2.1")}
                <Box/>
                {t("PC2.2")}
                <Box/>
                {t("PC2.3")}
                <Box/>
                {t("PC2.4")}
                <Box/>
                {t("PC2.5")}
                <Box/>
                {t("PC2.6")}
                <Box/>
                {t("PC2.7")}
                <Box/>
                {t("PC2.8")}
                <Box/>
                {t("PC2.9")}
                <Box/>
                {t("PC2.10")}
                <Box/>
                {t("PC2.11")}
                <Box/>
                {t("PC2.12")}
                <Box/>
                {t("PC2.13")}
                <Box/>
                {t("PC2.14")}
                <Box/>
                {t("PC2.15")}
                <Box/>
                {t("PC2.16")}
                <Box/>
                {t("PC2.17")}
                <Box/>
                {t("PC2.18")}
                <Box/>
                {t("PC2.19")}
                <Box/>
                {t("PC2.20")}
                <Box/>
                {t("PC2.21")}
                <Box/>
                {t("PC2.22")}
                <Box/>
                {t("PC2.23")}
                <Box/>
                {t("PC2.24")}
                <Box/>
                {t("PC2.25")}
                <Box/>
                {t("PC2.26")}
                <Box/>
                {t("PC2.27")}
                <Box/>
                {t("PC2.28")}
                <Box/>
                {t("PC2.29")}
                <Box/>
                {t("PC2.30")}
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
                <b>{t("PC3")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC3.0.1")}
                <Box/>
                {t("PC3.0.2")}
                <Box/>
                {t("PC3.1")}
                <Box/>
                {t("PC3.2")}
                <Box/>
                {t("PC3.3")}
                <Box/>
                {t("PC3.4")}
                <Box/>
                {t("PC3.5")}
                <Box/>
                {t("PC3.6")}
                <Box/>
                {t("PC3.7")}
                <Box/>
                {t("PC3.8")}
                <Box/>
                {t("PC3.9")}
                <Box/>
                {t("PC3.10")}
                <Box/>
                {t("PC3.11")}
                <Box/>
                {t("PC3.12")}
                <Box/>
                {t("PC3.13")}
                <Box/>
                {t("PC3.14")}
                <Box/>
                {t("PC3.15")}
                <Box/>
                {t("PC3.16")}
                <Box/>
                {t("PC3.17")}
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
                <b>{t("PC4")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC4.1")}
                <Box/>
                {t("PC4.2")}
                <Box/>
                {t("PC4.3")}
                <Box/>
                {t("PC4.4")}
                <Box/>
                {t("PC4.5")}
                <Box/>
                {t("PC4.6")}
                <Box/>
                {t("PC4.7")}
                <Box/>
                {t("PC4.8")}
                <Box/>
                {t("PC4.9")}
                <Box/>
                {t("PC4.10")}
                <Box/>
                {t("PC4.11")}
                <Box/>
                {t("PC4.12")}
                <Box/>
                {t("PC4.13")}
                <Box/> 
                {t("PC4.14")}
                <Box/>
                {t("PC4.15")}
                <Box/>
                {t("PC4.16")}
                <Box/>
                {t("PC4.17")}
                <Box/>
                {t("PC4.18")}
                <Box/>
                {t("PC4.19")}
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
                <b>{t("PC5")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC5.1")}
                <Box/>
                {t("PC5.2")}
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
                <b>{t("PC6")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC6.1")}
                <Box/>
                {t("PC6.2")}
                <Box/>
                {t("PC6.3")}
                <Box/>
                {t("PC6.4")}
                <Box/>
                {t("PC6.5")}
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
                <b>{t("PC7")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC7.1")}
                <Box/>
                {t("PC7.2")}
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
                <b>{t("PC8")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC8.1")}
                <Box/>
                {t("PC8.2")}
                <Box/>
                {t("PC8.3")}
                <Box/>
                {t("PC8.4")}
                <Box/>
                {t("PC8.5")}
                <Box/>
                {t("PC8.6")}
                <Box/>
                {t("PC8.7")}
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
                <b>{t("PC9")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC9.1")}
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
                <b>{t("PC10")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC10.1")}
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
                <b>{t("PC11")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC11.1")}
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
                <b>{t("PC12")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC12.1")}
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
                <b>{t("PC13")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("PC13.1")}
                <Box/>
                {t("PC13.2")}
                <Box/>
                {t("PC13.3")}
                <Box/>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PrivacyPolicy;