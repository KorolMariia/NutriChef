import { memo, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchParams } from '../../state/recipes/recipesSlice';
import { Button, Box, Popover, useTheme, FormGroup, Typography, FormControl, FormControlLabel, Checkbox, InputBase, TextField } from '@mui/material';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';

const excluded = ['Gluten', 'Dairy', 'Eggs', 'Soy', 'Wheat', 'Fish', 'Shellfish', 'Tree Nuts'];
const health = ['Vegetarian', 'Vegan', 'Kosher', 'Paleo', 'Low-Sugar', 'Alcohol-Free'];
const diet = ['Balanced', 'High-Fiber', 'High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium'];

//, 'Immunity'
const FilterRecipes = memo(() => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const timeoutRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const searchParamsQ = useSelector(({ recipes }) => recipes.searchParams.q);

  const [healthSearch, setHealthSearch] = useState([]);
  const [dietSearch, setDietSearch] = useState([]);
  const [excludedSearch, setAllergenSearch] = useState([]);

  const healthSearchString = healthSearch.join('&health=');
  const dietSearchString = dietSearch.join('&diet=');
  const excludedSearchString = excludedSearch.join('&excluded=');

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    clearTimeout(timeoutRef.current);
  };

  const handlePopoverClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  const handlePopoverMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleHealthChange = (health, checked) => {
    if (checked) {
      setHealthSearch(prevState => [...prevState, health.toLowerCase()]);
    } else {
      setHealthSearch(prevState => prevState.filter(item => item !== health.toLowerCase()));
    }
  };

  const handleAllergenChange = (allergen, checked) => {
    if (checked) {
      setAllergenSearch(prevState => [...prevState, allergen.toLowerCase()]);
    } else {
      setAllergenSearch(prevState => prevState.filter(item => item !== allergen.toLowerCase()));
    }
  };

  const handleDietChange = (diet, checked) => {
    if (checked) {
      setDietSearch(prevState => [...prevState, diet.toLowerCase()]);
    } else {
      setDietSearch(prevState => prevState.filter(item => item !== diet.toLowerCase()));
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        endIcon={<ArrowDropDownCircleOutlinedIcon />}
        sx={{ color: theme.palette.primary.colored, textTransform: 'none' }}
      >
        SEARCH by Calories, Diet, Ingredients
      </Button>
      <Popover
        onMouseEnter={handlePopoverMouseEnter}
        onMouseLeave={handlePopoverClose}
        disableRestoreFocus
        style={{ pointerEvents: 'none' }}
        PaperProps={{ style: { pointerEvents: 'auto', padding: '10px' } }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <FormControl component="fieldset">
            <Typography variant="subtitle2">Health</Typography>
            <FormGroup>
              {health.map((health) => (
                <FormControlLabel
                  key={health}
                  control={
                    <Checkbox
                      checked={healthSearch.includes(health.toLowerCase())}
                      onChange={(event) => handleHealthChange(health, event.target.checked)}
                    />
                  }
                  label={health}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
            <Typography variant="subtitle2">Diet</Typography>
            <FormGroup>
              {diet.map((diet) => (
                <FormControlLabel
                  key={diet}
                  control={
                    <Checkbox
                      checked={dietSearch.includes(diet.toLowerCase())}
                      onChange={(event) => handleDietChange(diet, event.target.checked)}
                    />
                  }
                  label={diet}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
            <Typography variant="subtitle2">Allergen</Typography>
            <FormGroup>
              {excluded.map((exclud) => (
                <FormControlLabel
                  key={exclud}
                  control={
                    <Checkbox
                      checked={excludedSearch.includes(exclud.toLowerCase())}
                      onChange={(event) => handleAllergenChange(exclud, event.target.checked)}
                    />
                  }
                  label={exclud}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            sx={{ color: theme.palette.primary.text, textTransform: 'none' }}
            onClick={() => {
              setHealthSearch([]);
              setDietSearch([]);
              setAllergenSearch([]);
              dispatch(setSearchParams({ q: searchParamsQ, health: null, diet: null, excluded: null }));
            }}
          >
            <CancelIcon />Clear filter
          </Button>
          <Button
            sx={{ backgroundColor: theme.palette.primary.colored }}
            onClick={() => {
              dispatch(setSearchParams({ q: searchParamsQ, health: healthSearchString, diet: dietSearchString, excluded: excludedSearchString }));
              handlePopoverClose();
            }}
          >
            Find
          </Button>
        </Box>
      </Popover >
    </Box >
  );
});

export default FilterRecipes;
