import { MdAccountCircle } from 'react-icons/md';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';

const Profile = () => {
  return (
    <NavItem icon={<MdAccountCircle />}>
      <DropdownMenu>
        <DropdownItem>Notifcation preference setting</DropdownItem>
      </DropdownMenu>
    </NavItem>
  );
};

export default Profile;
