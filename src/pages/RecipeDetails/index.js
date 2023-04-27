import { useSelector, useDispatch } from 'react-redux';
import { getRecipesHealthLabel } from '../../state/recipes/recipesSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { Box, Grid, Typography, List, ListItem, ListItemText, Link, useTheme } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';

const RecipeDetailsPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const loading = useSelector(({ recipes }) => recipes.loading);
  const recipe = useSelector(({ recipes }) => recipes.recipe);

  if (loading) {
    return <Loader />
  }

  function navigateToRecipes(healthLabel) {
    navigate(`/recipes`, { replace: true });
    dispatch(getRecipesHealthLabel(healthLabel.toLowerCase()))
  }

  return (
    <>
      <Box sx={{
        textAlign: 'center', borderBottom: '2px solid #000',
        paddingBottom: '10px'
      }} >
        <Typography variant="h4" component="h4">
          {recipe.label} / {recipe.cuisineType} food
        </Typography>
        {recipe.healthLabels.map((healthLabel, index) =>
          <Link key={index} sx={{ color: theme.palette.secondary.main }} onClick={() => navigateToRecipes(healthLabel)}>
            {healthLabel}
          </Link>)}
      </Box>
      <Grid container spacing={1} alignItems="center" mt='20px' gap='20px' sx={{ justifyContent: { xs: 'start', md: "space-around" } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recipe.totalTime ? (
            <Typography>
              <AlarmOutlinedIcon />Cooking time: {recipe.totalTime} min.
            </Typography>
          ) : null}
          {recipe.calories ? (
            <Typography>
              <RestaurantOutlinedIcon />Calories: {Math.round(recipe.calories)} kcal
            </Typography>
          ) : null}
          {recipe.dietLabels.length ? (
            <Typography>
              <MenuBookOutlinedIcon />Nutrition labels: {recipe.dietLabels.join(', ')}
            </Typography>
          ) : null}
          {recipe.cautions.length ? (
            <Typography>
              <ErrorOutlineOutlinedIcon />Cautions: {recipe.cautions.join(', ')}
            </Typography>
          ) : null}
          <img src={recipe.image} alt={recipe.label} style={{ borderRadius: '10px', width: '100%' }} />
        </Box>
        <List dense>
          <Typography variant="h5">Ingredients</Typography>
          {recipe.ingredients.map((item, index) => (
            <ListItem key={index}>
              <SoupKitchenOutlinedIcon />
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <NavLink to='/recipes' className="button">
        <WestIcon /> Go back
      </NavLink>
    </>
  );
};


export default RecipeDetailsPage;


