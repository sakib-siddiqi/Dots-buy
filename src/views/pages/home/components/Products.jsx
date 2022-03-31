import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../../../components/common/cards/ProductCard";
import DotsContainer from "../../../components/custom/container/DotsContainer";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((store) => store.products);
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
        <Grid container spacing={2}>
          {products?.map((item, index) => (
            <Grid item key={index} xs={12} md={4} lg={3}>
              <ProductCard productData={item} />
            </Grid>
          ))}
        </Grid>
      </DotsContainer>
    </Box>
  );
}
