import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { UserProvider } from "./context/UserContext";
import { Router } from "./Router";
import { GLobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <BrowserRouter>
          <UserProvider>
            <Router />
          </UserProvider>
          <GLobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
