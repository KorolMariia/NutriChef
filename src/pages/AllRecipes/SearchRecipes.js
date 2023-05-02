import { useState, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { setSearchParams } from '../../state/recipes/recipesSlice';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchRecipes = memo(() => {
  const dispatch = useDispatch();
  // const searchParams = useSelector(({ recipes }) => recipes.searchParams);
  const [searchValue, setSearchValue] = useState('');
  const [errorSearchValue, setErrorSearchValue] = useState(null);

  const delayedSearch = useCallback(
    debounce((searchValue) => {
      dispatch(setSearchParams({ q: searchValue }));
    }, 600),
    [dispatch],
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
          autoFocus={true}
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