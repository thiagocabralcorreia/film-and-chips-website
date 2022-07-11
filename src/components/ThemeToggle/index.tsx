import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

export interface ThemeToggleProps {
	toggleTheme: () => void;
}

export const ThemeToggle = ({ toggleTheme }: ThemeToggleProps) => {
  const { colors, title } = useContext(ThemeContext);
 
  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      onHandleColor={colors.gray100}
      offHandleColor={colors.gray100}
      onColor={colors.primary}
      offColor={colors.primary}
    />
  );
};
