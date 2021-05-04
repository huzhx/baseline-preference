import { useState, useEffect } from 'react';

import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import { MdFormatSize } from 'react-icons/md';
import Slider from './Slider';

const FontSizeSelector = () => {
  const initFontsize = localStorage.getItem('font_size') || 92.5;
  const [fontsize, setFontsize] = useState(initFontsize);

  const onChange = (event) => {
    setFontsize(parseFloat(event.target.value));
  };

  useEffect(() => {
    document.documentElement.style.setProperty('font-size', `${fontsize}%`);
    localStorage.setItem('font_size', fontsize);
  }, [fontsize]);

  return (
    <NavItem icon={<MdFormatSize />}>
      <DropdownMenu>
        <Slider min={72.5} max={152.5} step={5} value={fontsize} onChange={onChange} />
      </DropdownMenu>
    </NavItem>
  );
};

export default FontSizeSelector;
