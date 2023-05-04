import { memo } from 'react';
import SearchRecipes from './SearchRecipes';
import FilterRecipes from './FilterRecipes';
import Recipes from './Recipes';
import { Grid, Typography } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const AllRecipesPage = memo(() => {
  return (
    <>
      <SearchRecipes />
      <FilterRecipes />
      <Typography variant="subtitle1">
        Simple Recipes That Make You Feel Good <FavoriteOutlinedIcon />
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        <Recipes />
      </Grid>


    </>
  );
});

export default AllRecipesPage;
