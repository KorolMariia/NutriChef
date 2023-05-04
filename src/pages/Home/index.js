import { memo } from 'react';
import { Typography } from '@mui/material';
import PopularRecipes from './PopularRecipes';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'

const HomePage = memo(() => {
  return (
    <>
      <Typography variant="h3" component="h3">
        All eaters are welcome!
      </Typography>
      <Typography variant="subtitle1">
        Whether you're new to NutriChef or have been around for a while, we're so glad you're here <FavoriteOutlinedIcon />
      </Typography>
      <PopularRecipes />
    </>
  );
});

export default HomePage;
