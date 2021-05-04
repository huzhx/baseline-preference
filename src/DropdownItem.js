import styles from './DropdownItem.module.css';

const DropdownItem = ({ leftIcon, rightIcon, children, onClick, iconColor }) => {
  return (
    <div className={styles['menu_item']} onClick={onClick}>
      {leftIcon && (
        <span className={styles['menu_item__icon']} style={{ color: iconColor }}>
          {leftIcon}
        </span>
      )}

      {children}

      {leftIcon && (
        <span className={styles['menu_item__icon_right']} style={{ color: iconColor }}>
          {rightIcon}
        </span>
      )}
    </div>
  );
};

export default DropdownItem;
