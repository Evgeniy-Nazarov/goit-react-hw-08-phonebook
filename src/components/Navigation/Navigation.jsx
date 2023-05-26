import { useAuth } from 'hooks';
import { Toolbar, Typography } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
const NavLink = require('react-router-dom').NavLink;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar>
      <Typography
        textDecoration="none"
        color="inherit"
        variant="h6"
        sx={{ flexGrow: 1, textDecoration: 'none' }}
        component={NavLink}
        to="/"
      >
        Home
      </Typography>
      {isLoggedIn && (
        <Typography
          textDecoration="none"
          color="inherit"
          variant="h6"
          sx={{ flexGrow: 12, textDecoration: 'none' }}
          component={NavLink}
          to="/contacts"
        >
          Contacts
        </Typography>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Toolbar>
  );
};
