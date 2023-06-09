import { useState, memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { setSearchParams } from '../../state/recipes/recipesSlice';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchRecipes = memo(() => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [errorSearchValue, setErrorSearchValue] = useState(null);
  const searchParamsHealth = useSelector(({ recipes }) => recipes.searchParams.health);
  const searchParamsDiet = useSelector(({ recipes }) => recipes.searchParams.diet);
  const searchParamsExcluded = useSelector(({ recipes }) => recipes.searchParams.excluded);

  const delayedSearch = useCallback(
    debounce((searchValue) => {
      dispatch(setSearchParams({ q: searchValue, health: searchParamsHealth, diet: searchParamsDiet, excluded: searchParamsExcluded }));
    }, 600),
    [dispatch, searchParamsHealth, searchParamsDiet, searchParamsExcluded],
  );

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value && !/^[a-zA-Z]+$/gi.test(value)) {
      setErrorSearchValue('This field must contain only English letters');
    } else if (!value) {
      setErrorSearchValue('This field is required');
      delayedSearch(value);
    } else {
      delayedSearch(value);
      setErrorSearchValue(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setErrorSearchValue(null);
      setSearchValue('');
      dispatch(setSearchParams({ q: '', health: searchParamsHealth, diet: searchParamsDiet, excluded: searchParamsExcluded }));
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      onChangeHandler(event);
      setSearchValue('');
    }
  };

  return (
    <>
      <Paper
        component='form'
        sx={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search...'
          inputProps={{ 'aria-label': 'search...' }}
          value={searchValue}
          onChange={onChangeHandler}
          onKeyDown={handleKeyDown}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
        {errorSearchValue && <span id="search-error">{errorSearchValue}</span>}
      </Paper>

    </>
  )
});

export default SearchRecipes;