import { MdAccountCircle } from 'react-icons/md';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import NotificationPreference from './NotificationPreference';

const Profile = () => {
  return (
    <NavItem testId="profileContainer" icon={<MdAccountCircle />}>
      <DropdownMenu>
        <NotificationPreference />
      </DropdownMenu>
    </NavItem>
  );
};

export default Profile;
