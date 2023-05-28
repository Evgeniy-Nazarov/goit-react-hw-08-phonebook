import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  ButtonStyled,
  InputStyled,
  LabelStyled,
  LoginFormStyled,
} from './LoginForm.styled';

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
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" autoComplete="off" />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled type="password" name="password" autoComplete="off" />
      </LabelStyled>
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </LoginFormStyled>
  );
};
