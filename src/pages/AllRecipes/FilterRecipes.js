import { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchParams } from '../../state/recipes/recipesSlice';
import { Button, Box, Popover, useTheme, FormGroup, Typography, FormControl, FormControlLabel, Checkbox } from '@mui/material';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const allergies = ['Gluten', 'Dairy', 'Eggs', 'Soy', 'Wheat', 'Fish', 'Shellfish', 'Tree Nuts'];
const health = ['Vegetarian', 'Vegan', 'Kosher', 'Paleo', 'Low-Sugar', 'Alcohol-Free', 'Immunity'];
const diet = ['Balanced', 'High-Fiber', 'High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium'];


const FilterRecipes = memo(() => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [healthSearch, setHealthSearch] = useState([]);
  const [dietSearch, setDietSearch] = useState([]);
  const [allergenSearch, setAllergenSearch] = useState([]);

  const healthSearchString = healthSearch.join('&health=');
  const allergenSearchString = allergenSearch.join(',');

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleHealthChange = (health) => {
    setHealthSearch(prevState => [...prevState, health.toLowerCase()]);
    // setHealthSearch(health.toLowerCase());
  }

  const handleAllergenChange = (allergen) => {
    setAllergenSearch(prevState => [...prevState, allergen.toLowerCase()]);
    // setAllergenSearch(allergen.toLowerCase());
  }

  const handleDietChange = (diet) => {
    setDietSearch(diet.toLowerCase());
  }

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onMouseEnter={handlePopoverOpen}
        endIcon={<ArrowDropDownCircleOutlinedIcon />}
        sx={{ color: theme.palette.secondary.main, textTransform: 'none' }}
      >
        SEARCH by Calories, Diet, Ingredients
      </Button>
      <Popover
        // onMouseEnter={handlePopoverOpen}
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
                      checked={health.checked}
                      onChange={() => handleHealthChange(health)}
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
                      checked={diet.checked}
                      onChange={() => handleDietChange(diet)}
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
              {allergies.map((allergen) => (
                <FormControlLabel
                  key={allergen}
                  control={
                    <Checkbox
                      checked={allergen.checked}
                      onChange={() => handleAllergenChange(allergen)}
                    />
                  }
                  label={allergen}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            sx={{ backgroundColor: theme.palette.secondary.main }}
            onClick={() => dispatch(setSearchParams({ health: healthSearchString, diet: dietSearch, excluded: allergenSearchString }))}
          >
            Find
          </Button>
        </Box>
      </Popover>
    </Box >
  );
});

export default FilterRecipes;
