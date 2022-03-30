import React from "react";
import { Container } from "@mui/material";
const DotsContainer = ({ children, sx, maxWidth, ...rest }) => {
  return (
    <Container
      {...rest}
    >
      {children}
    </Container>
  );
};

export default DotsContainer;
