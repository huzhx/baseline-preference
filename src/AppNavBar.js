import NavBar from './NavBar';
import NavItem from './NavItem';
import { MdAccountCircle } from 'react-icons/md';
import ThemeSelector from './ThemeSelector';
import FontSizeSelector from './FontSizeSelector';

const AppNavBar = () => {
  return (
    <NavBar>
      <FontSizeSelector />
      <ThemeSelector />
      <NavItem icon={<MdAccountCircle />} />
    </NavBar>
  );
};

export default AppNavBar;
