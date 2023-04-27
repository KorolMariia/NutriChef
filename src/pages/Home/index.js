import { Typography } from '@mui/material';
import Recipes from './Recipes';

const HomePage = () => {
  return (
    <>
      <Typography variant="h3" component="h3">
        All eaters are welcome!
      </Typography>
      <Typography variant="subtitle1">
        Whether you're new to NutriChef or have been around for a while, we're so glad you're here.
      </Typography>
      <Recipes />
    </>
  );
}

export default HomePage;