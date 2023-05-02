import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import CardRecipe from '../../Components/CardRecipe';


const FavoritePage = memo(() => {
  const favoriteRecipes = useSelector(({ recipes }) => recipes.favoriteRecipes);

  return (
    <Grid container spacing={2} justifyContent='center'>
      {favoriteRecipes.length > 0 ?
        favoriteRecipes.map((recipe) => <CardRecipe recipe={recipe} key={recipe.uri} />)
        : <Typography variant="subtitle1" >
          You haven't added any recipes to your favorites yet.
        </Typography>
      }
    </Grid>
  );
}
);

export default FavoritePage;
