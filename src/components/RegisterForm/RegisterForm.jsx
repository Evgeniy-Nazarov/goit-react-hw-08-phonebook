import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, Input } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
      <label>
        <Input
          placeholder="Username"
          type="name"
          name="name"
          autoComplete="off"
        />
      </label>

      <label>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          autoComplete="off"
        />
      </label>
      <label>
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
        Register
      </Button>
    </Box>
  );
};
