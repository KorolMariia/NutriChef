import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isFavorite, addToFavoriteList, getRecipe } from '../state/recipes/recipesSlice';
import { Grid, Card, CardHeader, CardMedia, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const CardRecipe = memo(({ recipe, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavoriteRecipes = useSelector(({ recipes }) => recipes.isFavoriteRecipes);

  function navigateToRecipeInfo(recipeUri) {
    navigate(`/recipedetails`, { replace: true });
    dispatch(getRecipe(recipeUri))
  }

  return (
    <Grid key={recipe.uri} item xs={12} sm={6} md={4} lg={3} >
      <Card variant="outlined"
        sx={{
          height: 450,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia
          component="img"
          height="250"
          width="100%"
          image={recipe.image}
          alt={recipe.label}
          onClick={() => navigateToRecipeInfo(recipe.uri)}
          sx={{ cursor: 'pointer' }}
        />
        <CardHeader
          onClick={() => navigateToRecipeInfo(recipe.uri)}
          title={recipe.label}
          sx={{ cursor: 'pointer' }}
          subheader={`${recipe.mealType}, ${recipe.cuisineType}`}
        />
        <CardActions disableSpacing style={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton aria-label="add to favorites" onClick={() => { dispatch(isFavorite(index)); dispatch(addToFavoriteList(recipe)) }}>
            {isFavoriteRecipes[index] ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid >
  );
}
);

export default CardRecipe;