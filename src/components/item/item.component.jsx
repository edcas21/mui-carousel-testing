import React from "react";

// components
import {
  Button,
  listItemSecondaryActionClasses,
  Paper,
  Typography,
} from "@mui/material";

// styles
import itemStyles from "./item.styles";

const Item = ({ name, description }) => {
  return (
    <Paper>
      <Typography variant="h2">{name}</Typography>
      <p>{description}</p>
      <Button sx={itemStyles.button}>Check it out!</Button>
    </Paper>
  );
};

export default Item;
