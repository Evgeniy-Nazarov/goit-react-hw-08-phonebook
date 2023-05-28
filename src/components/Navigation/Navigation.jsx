import { useAuth } from 'hooks';
import { NavigationLinkstStyled, NavigationStyled } from './Navigationstyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      <NavigationLinkstStyled to="/">Home</NavigationLinkstStyled>
      {isLoggedIn && (
        <NavigationLinkstStyled to="/contacts">Contacts</NavigationLinkstStyled>
      )}
    </NavigationStyled>
  );
};
