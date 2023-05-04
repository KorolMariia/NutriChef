import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { getRecipes, getRecipesSearchFilter } from '../../state/recipes/recipesSlice';
import CardRecipe from '../../Components/CardRecipe';
import Loader from '../../Components/Loader';
import { Typography } from '@mui/material';

const Recipes = memo(() => {
  const dispatch = useDispatch();
  const loading = useSelector(({ recipes }) => recipes.loading);
  const recipes = useSelector(({ recipes }) => recipes.recipes);
  const searchParams = useSelector(({ recipes }) => recipes.searchParams);

  useEffect(() => {
    if (_.some(searchParams)) {
      dispatch(getRecipesSearchFilter(searchParams));
    } else {
      dispatch(getRecipes());
    }
  }, [dispatch, searchParams])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {recipes ?
        recipes.map(({ recipe }) => <CardRecipe recipe={recipe} key={recipe.uri} />)
        : <Typography variant="subtitle1" >
          Recipes not found. Please try a different query.
        </Typography>}
    </>
  );
});

export default Recipes;
