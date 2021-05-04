import styles from './DropdownMenu.module.css';

const DropdownMenu = ({ children }) => {
  return <div className={styles.dropdown}>{children}</div>;
};

export default DropdownMenu;
