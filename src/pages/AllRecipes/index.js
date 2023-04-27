import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../state/recipes/recipesSlice';
import SearchRecipes from './SearchRecipes';
import CardRecipe from '../../Components/CardRecipe';
import Loader from '../../Components/Loader';
import { Grid, Typography } from '@mui/material';

const AllRecipesPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({ recipes }) => recipes.loading);
  const recipes = useSelector(({ recipes }) => recipes.recipes);
  const healthLabelRecipes = useSelector(({ recipes }) => recipes.healthLabelRecipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  const recipeCards = healthLabelRecipes.map(({ recipe }, index) => (
    <CardRecipe recipe={recipe} key={index} />
  ));

  return (
    <>
      <SearchRecipes />
      <Typography variant="subtitle1">
        Simple Recipes That Make You Feel Good
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        {recipeCards}
        {recipes.map(({ recipe }, index) => <CardRecipe recipe={recipe} index={index} key={index} />)}
      </Grid>


    </>
  );
}

export default AllRecipesPage;
