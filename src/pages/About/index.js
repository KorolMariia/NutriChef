import { memo } from 'react';
import { Typography, CardMedia, Grid, Box } from '@mui/material';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


const AboutPage = memo(() => {
  return (
    <>
      <Typography variant="h3" component="h3">
        Welcome, everyone!
      </Typography>
      <Typography variant="subtitle1">
        Whether you're new to NutriChef or have been around for a while, we're so glad you're here <FavoriteOutlinedIcon />
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Box>
            <CardMedia
              component="img"
              height="400"
              width="100%"
              image='images/imgAbout.jpg'
              alt='image About'
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="body1">
              <RamenDiningOutlinedIcon />The NutriChef is an online platform for people interested in cooking various dishes.
            </Typography>
            <Typography variant="body1" mt={2}>
              The site offers a wide database of recipes from different cuisines around the world, from classic dishes to exotic recipes.
            </Typography>
            <Typography variant="body1" mt={2}>
              Each recipe includes a detailed description of the ingredients and instructions for preparation, as well as photos of the dish.
            </Typography>
            <Typography variant="body1" mt={2}>
              Our website will help you learn how to cook your favorite dishes, experiment with new recipes, and enjoy the convenience and comfort of cooking at home.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
});

export default AboutPage;
