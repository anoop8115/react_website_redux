import React from "react";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {
  return (
    <div>
      <div style={{ width: "100%", height: "7vh" }}>
        <Typography
          paragraph="true"
          align="left"
          variant="h5"
          style={{ padding: 7, fontWeight: "bolder" }}
          color="blueviolet"
        >
          Test Store
        </Typography>
        <ShoppingCartIcon
          style={{ position: "absolute", top: 27, right: 20 }}
          fontSize="medium"
        />
      </div>
      <hr></hr>
    </div>
  );
}
