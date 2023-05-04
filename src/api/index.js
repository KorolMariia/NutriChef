import axios from 'axios';
import { APP_ID_SEARCH, APP_KEY_SEARCH, APP_ID_DATABASE, APP_KEY_DATABASE, APP_KEY_ANALYSIS, APP_ID_ANALYSIS } from '../config';

const apiAccessSearch = {
  app_id: APP_ID_SEARCH,
  app_key: APP_KEY_SEARCH,
};

const apiAccessDatabase = {
  app_id: APP_ID_DATABASE,
  app_key: APP_KEY_DATABASE,
};

const apiAccessAnalysis = {
  app_id: APP_ID_ANALYSIS,
  app_key: APP_KEY_ANALYSIS,
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
        to: 8,
        ...apiAccessSearch,
      },
    });
    return data.hits;
  }
  catch (error) {
    console.log(error);
  };
}

export const fetchRecipes = async () => {
  try {
    const { data } = await edamamAxios.get('/search', {
      params: {
        q: 'breakfast',
        from: 0,
        to: 20,
        ...apiAccessSearch,
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
        ...apiAccessSearch,
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
        ...apiAccessSearch,
      },
    });
    return data.hits;
  }
  catch (error) {
    console.log(error);
  };
};


export const fetchRecipesSearchFilter = async (searchParams) => {
  console.log(searchParams)
  try {
    const { data } = await edamamAxios.get('/api/recipes/v2', {
      params: {
        type: 'public',
        q: searchParams.q || '',
        calories: searchParams.calories || null,
        health: searchParams.health || null,
        diet: searchParams.diet || null,
        excluded: searchParams.excluded || null,
        ingr: searchParams.ingr || null,
        from: 0,
        to: 20,
        ...apiAccessSearch,
      },
    });
    return data.hits;
  }
  catch (error) {
    console.log(error);
  };
}
