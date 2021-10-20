import React from "react";
import {
  Container,
  Box,
  Grid,
  Checkbox,
  MenuItem,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";
import PaginationSBD from "../../../components/pagination/pagination";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../../../App.css";
import { useTranslation } from "react-i18next";

const FrequentQuestions = () => {
  const { t } = useTranslation();

  return (
    <Container className={"Primary-container-style"} style={{ minHeight: "auto" }}>
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Grid container item xs={11} justifyContent="center">
          <Box mb={4} fontWeight={400} fontSize={22} textAlign={"center"}>
            {t("FAQ")}
          </Box>
        </Grid>
        <Grid container item xs={11} justifyContent="center">
          <Box mb={4} fontWeight={400} fontSize={14} textAlign={"left"}>
            {t("FAQContent")}
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
                <b>{t("FAQ1")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ1Answear")}
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
                <b>{t("FAQ2")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ2Answear")}
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
                <b>{t("FAQ3")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ3Answear")}
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
                <b>{t("FAQ4")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ4Answear")}
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
                <b>{t("FAQ5")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ5Answear")}
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
                <b>{t("FAQ6")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ6Answear")}
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
                <b>{t("FAQ7")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ7Answear")}
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
                <b>{t("FAQ8")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ8Answear")}
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
                <b>{t("FAQ9")}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" display="block" gutterBottom>
                {t("FAQ9Answear")}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FrequentQuestions;
