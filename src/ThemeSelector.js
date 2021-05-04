import { useState, useEffect } from 'react';

import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import { MdPalette, MdLens } from 'react-icons/md';

const ThemeSelector = () => {
  const theme = {
    hue: localStorage.getItem('theme_color_hue') || 169,
    saturation: localStorage.getItem('theme_color_saturation') || '60%',
    light: localStorage.getItem('theme_color_light') || '46%',
  };
  const [primaryColor, setPrimaryColor] = useState(theme);

  const onClick = (color) => {
    setPrimaryColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', primaryColor.hue);
    document.documentElement.style.setProperty('--saturation', primaryColor.saturation);
    document.documentElement.style.setProperty('--light', primaryColor.light);
    localStorage.setItem('theme_color_hue', primaryColor.hue);
    localStorage.setItem('theme_color_saturation', primaryColor.saturation);
    localStorage.setItem('theme_color_light', primaryColor.light);
  }, [primaryColor]);

  return (
    <NavItem icon={<MdPalette />}>
      <DropdownMenu>
        <DropdownItem
          leftIcon={<MdLens />}
          onClick={() => onClick({ hue: 169, saturation: '60%', light: '46%' })}
          iconColor="#2fbca1"
        >
          Green
        </DropdownItem>
        <DropdownItem
          leftIcon={<MdLens />}
          onClick={() => onClick({ hue: 38, saturation: '100%', light: '55%' })}
          iconColor="#ffab1a"
        >
          Orange
        </DropdownItem>
        <DropdownItem
          leftIcon={<MdLens />}
          onClick={() => onClick({ hue: 207, saturation: '89%', light: '60%' })}
          iconColor="#3ea2f4"
        >
          Blue
        </DropdownItem>
      </DropdownMenu>
    </NavItem>
  );
};

export default ThemeSelector;
