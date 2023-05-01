import SearchRecipes from './SearchRecipes';
import Recipes from './Recipes';
import { Grid, Typography } from '@mui/material';

const AllRecipesPage = () => {
  return (
    <>
      <SearchRecipes />
      <Typography variant="subtitle1">
        Simple Recipes That Make You Feel Good
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        <Recipes />
      </Grid>


    </>
  );
}

export default AllRecipesPage;
