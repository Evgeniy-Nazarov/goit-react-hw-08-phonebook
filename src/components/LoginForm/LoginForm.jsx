import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Box, Button, Input } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      spacing={2}
      sx={{
        width: '23ch',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          autoComplete="off"
        />
      </label>
      <label className={css.label}>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="off"
        />
      </label>
      <Button
        size="md"
        sx={{
          marginTop: '10px',
          backgroundColor: 'inherit',
          color: '#1976d2',
          border: '1px solid #1976d2',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#1976d2',
            color: '#fff',
          },
        }}
        type="submit"
      >
        Log In
      </Button>
    </Box>
  );
};
