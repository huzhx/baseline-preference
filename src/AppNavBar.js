import NavBar from './NavBar';
import ThemeSelector from './ThemeSelector';
import FontSizeSelector from './FontSizeSelector';
import Profile from './Profile';

const AppNavBar = () => {
  return (
    <NavBar>
      <FontSizeSelector />
      <ThemeSelector />
      <Profile />
    </NavBar>
  );
};

export default AppNavBar;
