import { styled as styles } from "styled-components";
import { Container, Typography, styled } from "@mui/material";

export const AuthContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(90vh - 64px)",
});

export const AuthWrapper = styles.div`
    border: 1px solid black;
    padding: 30px;
`;

export const TypographyTitle = styled(Typography)({
  textAlign: "center",
});
