import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularRecipes, fetchRecipes, fetchRecipe, fetchRecipesHealthLabel } from '../../api';

export const getPopularRecipes = createAsyncThunk(
  'recipes/getPopularRecipes',
  async () => {
    const data = await fetchPopularRecipes();
    return data;
  },
);

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (searchParams) => {
    const data = await fetchRecipes(searchParams);
    return data;
  },
);

export const getRecipe = createAsyncThunk(
  'recipes/getRecipe',
  async (recipeUri) => {
    const data = await fetchRecipe(recipeUri);
    return data;
  },
);

export const getRecipesHealthLabel = createAsyncThunk(
  'recipes/getRecipesHealthLabel',
  async (healthLabel) => {
    const data = await fetchRecipesHealthLabel(healthLabel);
    return data;
  },
);

const initialState = {
  popularRecipes: [],
  recipes: [],
  loading: false,
  error: null,
  isFavoriteRecipes: [],
  favoriteRecipes: [],
  recipe: {},
  healthLabelRecipes: [],
  searchParams: {
    q: '',
    calories: null,
    diet: '',
    health: '',
    ingr: null
  }
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    favoriteBooleanArr: (state) => {
      state.isFavoriteRecipes = state.popularRecipes.map(() => false);
    },
    isFavorite: (state, action) => {
      state.isFavoriteRecipes[action.payload] = !state.isFavoriteRecipes[action.payload];
    },
    addToFavoriteList: (state, action) => {
      const recipesUri = state.favoriteRecipes ? state.favoriteRecipes.map((recipe) => recipe.uri) : null;
      recipesUri.includes(action.payload.uri) ?
        state.favoriteRecipes = state.favoriteRecipes.filter(
          (recipe) => recipe.uri !== action.payload.uri)
        : state.favoriteRecipes.push(action.payload);
    },
    setSearchParams: (state, action) => {
      console.log(action.payload.q)
      state.searchParams.q = action.payload.q;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPopularRecipes.pending, (state) => {
        state.loading = true;
        state.popularRecipes = [];
        state.error = null;
      })
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.popularRecipes = action.payload;
        state.error = null;
      })
      .addCase(getPopularRecipes.rejected, (state, action) => {
        state.loading = false;
        state.popularRecipes = [];
        state.error = action.payload;
      })
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
        state.recipes = [];
        state.error = null;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
        state.error = null;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.loading = false;
        state.recipes = [];
        state.error = action.payload;
      })
      .addCase(getRecipe.pending, (state) => {
        state.loading = true;
        state.recipe = {};
        state.error = null;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
        state.error = null;
      })
      .addCase(getRecipe.rejected, (state, action) => {
        state.loading = false;
        state.recipe = {};
        state.error = action.payload;
      })
      .addCase(getRecipesHealthLabel.pending, (state) => {
        state.loading = true;
        state.healthLabelRecipes = [];
        state.error = null;
      })
      .addCase(getRecipesHealthLabel.fulfilled, (state, action) => {
        state.loading = false;
        state.healthLabelRecipes = action.payload;
        state.error = null;
      })
      .addCase(getRecipesHealthLabel.rejected, (state, action) => {
        state.loading = false;
        state.healthLabelRecipes = [];
        state.error = action.payload;
      });
  },
});

export const { isFavorite, favoriteBooleanArr, addToFavoriteList, setSearchParams } = recipesSlice.actions;

export default recipesSlice.reducer;