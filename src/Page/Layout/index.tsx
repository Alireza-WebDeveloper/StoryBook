import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import LinkContainer from "../../Components/Common/LinkContainer";
import StyledComponentThemeProvider from "../../Components/Context/StyledComponentThemeProvider";
import Title from "../../Components/Common/Title";
import { GlobalStyled } from "../../Components/Theme/global";
import ToggleTheme from "../../Components/Common/ToggleTheme";

const Layout = () => {
  return (
    <StyledComponentThemeProvider>
      <Header>
        <Title>story book</Title>
        <LinkContainer
          routes={[
            { href: "/", title: "home" },
            { href: "/about", title: "about" },
          ]}
        />
        <ToggleTheme />
      </Header>
      <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
      <GlobalStyled />
    </StyledComponentThemeProvider>
  );
};

export default Layout;
