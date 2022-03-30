import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../../../components/common/cards/ProductCard";
import DotsContainer from "../../../components/custom/container/DotsContainer";

export default function Proeducts() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        py: 10,
        bgcolor: (theme) => `${theme.palette.primary.main}10`,
      }}
    >
      <DotsContainer>
        <Grid
          container
          spacing={2}
        >
          {Array.from(Array(10)).map((_, index) => (
            <Grid item key={index} xs={6} md={4} lg={3}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </DotsContainer>
    </Box>
  );
}
