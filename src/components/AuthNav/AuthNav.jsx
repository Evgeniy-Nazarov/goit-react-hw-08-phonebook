import { Button } from '@mui/material';

const RouterLink = require('react-router-dom').Link;

export const AuthNav = () => {
  return (
    <>
      <Button
        color="inherit"
        variant="h6"
        component={RouterLink}
        to="/register"
      >
        Register
      </Button>
      <Button color="inherit" variant="h6" component={RouterLink} to="/login">
        Log In
      </Button>
    </>
  );
};
