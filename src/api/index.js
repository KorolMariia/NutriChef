import axios from 'axios';
import { APP_ID_SEARCH, APP_KEY_SEARCH, APP_ID_DATABASE, APP_KEY_DATABASE } from '../config';

const apiAccessSearch = {
  app_id: APP_ID_SEARCH,
  app_key: APP_KEY_SEARCH,
};

const apiAccessDatabase = {
  app_id: APP_ID_DATABASE,
  app_key: APP_KEY_DATABASE,
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

// export const fetchListDiet = async () => {
//   try {
//     const data = await edamamAxios.get(`/api/food-database/v2/references/allergens`, {
//       params: {
//         // category: 'diet',
//         // categoryLabel: 'diet',
//         // health: 'all',
//         ...apiAccessDatabase,
//       },
//     });
//     console.log(data)
//     return data;
//   }
//   catch (error) {
//     console.log(error);
//   };
// };
// fetchListDiet()