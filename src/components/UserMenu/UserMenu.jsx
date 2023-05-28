import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  UserMenuButtonStyled,
  UserMenuNameStyled,
  UserMenuStyled,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <UserMenuNameStyled>Welcome, {user.name}</UserMenuNameStyled>
      <UserMenuButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButtonStyled>
    </UserMenuStyled>
  );
};
