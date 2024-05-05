import styled from "styled-components";
import { useThemeProviderContext } from "../../Context/StyledComponentThemeProvider";
import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const StyledToggleTheme = styled.button`
  color: ${({ theme }) => theme.slate["900"]};
`;

const StyledIcon = styled.div`
  font-size: 2rem;
`;

const ToggleTheme = () => {
  const { theme, setTheme } = useThemeProviderContext();
  const [icon, setIcon] = useState(
    theme === "dark" ? <MdDarkMode /> : <MdLightMode />
  );

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      setIcon(nextTheme === "dark" ? <MdDarkMode /> : <MdLightMode />);
      return nextTheme;
    });
  };

  return (
    <StyledToggleTheme onClick={toggleTheme}>
      <StyledIcon>{icon}</StyledIcon>
    </StyledToggleTheme>
  );
};

export default ToggleTheme;
