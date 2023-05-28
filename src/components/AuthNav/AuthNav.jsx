import {
  AuthNavDivStyled,
  AuthNavLoginStyled,
  AuthNavRegisterStyled,
} from './AuthNavstyled';

export const AuthNav = () => {
  return (
    <AuthNavDivStyled>
      <AuthNavRegisterStyled to="/register">Register</AuthNavRegisterStyled>
      <AuthNavLoginStyled to="/login">Log In</AuthNavLoginStyled>
    </AuthNavDivStyled>
  );
};
