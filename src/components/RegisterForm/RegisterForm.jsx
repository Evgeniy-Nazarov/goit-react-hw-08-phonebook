import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  ButtonStyled,
  InputStyled,
  LabelStyled,
  RegisterFormStyled,
} from './RegisterForm.styled';

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
    <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Username
        <InputStyled type="text" name="name" autoComplete="off" />
      </LabelStyled>
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" autoComplete="off" />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled type="password" name="password" autoComplete="off" />
      </LabelStyled>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </RegisterFormStyled>
  );
};
