import { Container, styled } from "@mui/material";

export const HelloContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  height: "calc(90vh - 64px)",
});
