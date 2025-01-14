import { Card, CardContent, CardHeader, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Details1 = () => {
  return (
    <Box>
      <Card>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
         <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
        <CardContent></CardContent>
      </Card>
    </Box>
  );
};

export default Details1;
