import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPopularRecipes } from '../../state/recipes/recipesSlice';
import { Grid } from '@mui/material';
import CardRecipe from '../../Components/CardRecipe';
import Loader from '../../Components/Loader';
import EastIcon from '@mui/icons-material/East';

const PopularRecipes = memo(() => {
  const dispatch = useDispatch();
  const loading = useSelector(({ recipes }) => recipes.loading);
  const popularRecipes = useSelector(({ recipes }) => recipes.popularRecipes);

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  if (loading) {
    return <Loader />
  };

  return (
    <>
      <Grid container spacing={2} justifyContent='center'>
        {popularRecipes.map(({ recipe }) => <CardRecipe recipe={recipe} key={recipe.uri} />)}
      </Grid>
      <Link to="/recipes" className="button">
        Show me everything <EastIcon />
      </Link>
    </>
  );
}
);

export default PopularRecipes;