import axios from 'axios';
import { APP_ID, APP_KEY } from '../config';

const apiAccess = {
  app_id: APP_ID,
  app_key: APP_KEY,
};

const edamamAxios = axios.create({
  baseURL: 'https://api.edamam.com/',
});

export const fetchPopularRecipes = async () => {
  try {
    const { data } = await edamamAxios.get('/search', {
      params: {
        q: 'salad',
        from: 0,
        to: 4,
        ...apiAccess,
      },
    });
    return data.hits;
  }
  catch (error) {
    console.log(error);
  };
}

export const fetchRecipes = async (searchParams) => {
  try {
    const { data } = await edamamAxios.get('/search', {
      params: {
        q: searchParams.q || 'breakfast',
        calories: searchParams.calories || null,
        diet: searchParams.diet || null,
        health: searchParams.health || null,
        ingr: searchParams.ingr || null,
        from: 0,
        to: 20,
        ...apiAccess,
      },
    });
    return data.hits;
  }
  catch (error) {
    console.log(error);
  };
}

export const fetchRecipe = async (recipe_uri) => {
  const recipeId = recipe_uri.split('_')[1];
  try {
    const { data } = await edamamAxios.get(`/api/recipes/v2/${recipeId}`, {
      params: {
        type: 'public',
        ...apiAccess,
      },
    });
    return data.recipe;
  }
  catch (error) {
    console.log(error);
  };
};

export const fetchRecipesHealthLabel = async (healthLabel) => {
  try {
    const formattedHealthLabel = healthLabel.split(' ').join('-');
    const { data } = await edamamAxios.get('/api/recipes/v2/', {
      params: {
        type: 'public',
        health: `${formattedHealthLabel}`,
        from: 20,
        to: 40,
        ...apiAccess,
      },
    });
    return data.hits;
  }
  catch (error) {
    console.log(error);
  };
};