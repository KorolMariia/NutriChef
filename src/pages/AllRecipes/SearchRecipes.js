import { useState, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import debounce from 'lodash/debounce';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchRecipes = memo(() => {
  return (
    <form>
      <Paper
        component='form'
        sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: '20px' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search...'
          autoFocus='true'
          inputProps={{ 'aria-label': 'search...' }}
        // value={search}
        // onChange={onChangeHandler}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>

    </form>
  )
});

export default SearchRecipes;