import { Box, Typography, styled } from "@mui/material";
import { styled as styles } from "styled-components";

export const ModalContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#fff",
  boxShadow: "24px",
  padding: "50px",
  borderRadius: "10px",
});

export const ModalTitle = styled(Typography)({
  textAlign: "center",
  marginBottom: "40px",
  fontWeight: 300,
});

export const ButtonWrapper = styles.div`
    text-align: center;
`;
