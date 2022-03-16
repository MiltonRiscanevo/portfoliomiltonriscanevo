import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        E-commerce proyect
      </Typography>
      <Typography variant="h5" component="div">
        This E-commerce, have components React, and use Nodejs
      </Typography>
    </CardContent>
    <CardActions>
        <a href="https://goofy-kepler-d60c30.netlify.app/" target="_blank">See a little bit more</a>
      {/* <Button component={Link} to="https://goofy-kepler-d60c30.netlify.app/" size="small">See a little bit more</Button> */}
    </CardActions>
  </React.Fragment>
);

export default function CardProyect() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
