import { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToFavoriteList, getRecipe } from '../state/recipes/recipesSlice';
import { Box, Grid, Card, CardHeader, CardMedia, CardActions, Slide } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, ViberShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon, TelegramIcon, ViberIcon, WhatsappIcon } from "react-share";

const CardRecipe = memo(({ recipe }) => {
  const { uri, image, label, mealType, cuisineType, shareAs } = recipe;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteRecipes = useSelector(({ recipes }) => recipes.favoriteRecipes);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteRecipes.some((favRecipe) => favRecipe.uri === uri));
  }, [favoriteRecipes, uri]);

  function navigateToRecipeInfo(recipeUri) {
    navigate(`/recipedetails`, { replace: true });
    dispatch(getRecipe(recipeUri))
  }

  const handleFavoriteClick = () => {
    dispatch(addToFavoriteList(recipe));
    setIsFavorite(!isFavorite);
  }

  const handleShareClick = () => {
    setIsShareOpen(!isShareOpen);
  }

  return (
    <Grid key={uri} item xs={12} sm={6} md={4} lg={3}>
      < Card variant="outlined"
        sx={{
          height: 450,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }
        }
      >
        <CardMedia
          component="img"
          height="250"
          width="100%"
          image={image}
          alt={label}
          onClick={() => navigateToRecipeInfo(uri)}
          sx={{ cursor: 'pointer' }}
        />
        <CardHeader
          onClick={() => navigateToRecipeInfo(uri)}
          title={label}
          sx={{ cursor: 'pointer' }}
          subheader={`${mealType}, ${cuisineType}`}
        />
        <CardActions disableSpacing style={{ display: "flex", justifyContent: "flex-end", position: 'relative' }}>
          <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            {isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton aria-label="share" onClick={handleShareClick}>
            <ShareIcon />
          </IconButton>
          {isShareOpen &&
            <Slide direction="up" in={isShareOpen} mountOnEnter unmountOnExit
              sx={{
                backgroundColor: '#fff',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                position: 'absolute',
                bottom: '50px',
                border: '1px solid #43A047',
                boxShadow: '#43A047 4px 2px 5px',
                borderRadius: '10px'
              }}
            >
              <Box onClick={handleShareClick}>
                <TelegramShareButton url={shareAs}>
                  <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
                <ViberShareButton url={shareAs}>
                  <ViberIcon size={32} round={true} />
                </ViberShareButton>
                <WhatsappShareButton url={shareAs}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <FacebookShareButton url={shareAs}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={shareAs}>
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
              </Box>
            </Slide>}
        </CardActions>
      </Card >
    </Grid >
  );
}
);

export default CardRecipe;