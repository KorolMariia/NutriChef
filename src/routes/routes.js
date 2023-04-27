import { lazy, Suspense } from 'react';

// const Login = lazy(() => import('../pages/Login/Login'));
// const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const AllRecipes = lazy(() => import('../pages/AllRecipes'));
const FavoriteRecipes = lazy(() => import('../pages/FavoriteRecipes'));
const RecipeDetails = lazy(() => import('../pages/RecipeDetails'));
const Privacy = lazy(() => import('../pages/Privacy'));

const routes = [
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense>
        <About />
      </Suspense>
    ),
  },
  // {
  //   path: '/login',
  //   element: (
  //     <Suspense>
  //       <Login />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: '/signup',
  //   element: (
  //     <Suspense>
  //       <SignUp />
  //     </Suspense>
  //   ),
  // },
  {
    path: '/recipes',
    element: (
      <Suspense>
        <AllRecipes />
      </Suspense>
    ),
  },
  {
    path: 'recipedetails',
    element: (
      <Suspense>
        <RecipeDetails />
      </Suspense>
    ),
  },
  {
    path: '/favorites',
    element: (
      <Suspense>
        <FavoriteRecipes />
      </Suspense>
    ),
  },
  {
    path: '/privacy',
    element: (
      <Suspense>
        <Privacy />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
];

export default routes;