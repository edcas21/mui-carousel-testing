import React from "react";

// components
import {
  Button,
  Paper,
  Typography,
} from "@mui/material";

// styles
import itemStyles from "./item.styles";

const Item = ({item}) => {


  return (
    <Paper>
      <Typography variant="h2">{item.name}</Typography>
      <p>{item.description}</p>
      <Button sx={itemStyles.button}>Check it out!</Button>
    </Paper>
  );
};

export default Item;
