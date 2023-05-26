import { Navigation } from '../Navigation/Navigation';
import { AppBar, Box } from '@mui/material';

export const AppBarPhoneBook = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Navigation />
      </AppBar>
    </Box>
  );
};
