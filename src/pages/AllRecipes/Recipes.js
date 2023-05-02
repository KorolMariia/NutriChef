import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../state/recipes/recipesSlice';
import CardRecipe from '../../Components/CardRecipe';
import Loader from '../../Components/Loader';
import { Typography } from '@mui/material';

const Recipes = memo(() => {
  const dispatch = useDispatch();
  const loading = useSelector(({ recipes }) => recipes.loading);
  const recipes = useSelector(({ recipes }) => recipes.recipes);
  const healthLabelRecipes = useSelector(({ recipes }) => recipes.healthLabelRecipes);
  const searchParams = useSelector(({ recipes }) => recipes.searchParams);

  useEffect(() => {
    dispatch(getRecipes(searchParams));
  }, [dispatch, searchParams])

  if (loading) {
    return <Loader />
  }

  const recipeHealthCards = healthLabelRecipes.map(({ recipe }) => (
    <CardRecipe recipe={recipe} key={recipe.uri} />
  ));

  return (
    <>
      {recipeHealthCards}
      {recipes.length ?
        recipes.map(({ recipe }) => <CardRecipe recipe={recipe} key={recipe.uri} />)
        : <Typography variant="subtitle1" >
          Recipes not found. Please try a different query.
        </Typography>}
    </>
  );
});

export default Recipes;
