import { memo, useState } from 'react';
import { Button, Box, Popover, useTheme } from '@mui/material';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const FilterRecipes = memo(() => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        endIcon={<ArrowDropDownCircleOutlinedIcon />}
        sx={{ color: theme.palette.secondary.main, textTransform: 'none' }}
      >
        SEARCH by Calories, Diet, Ingredients
      </Button>
      <Popover
        style={{ pointerEvents: 'none' }}
        PaperProps={{ style: { pointerEvents: 'auto', padding: '10px' } }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ul>
          <li>1</li>
        </ul>
      </Popover>
    </Box >
  );
});

export default FilterRecipes;