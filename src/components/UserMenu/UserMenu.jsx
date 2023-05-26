import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        color="inherit"
        variant="h6"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
};
