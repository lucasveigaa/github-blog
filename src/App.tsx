import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Router } from "./Router";
import { GLobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <BrowserRouter>
          <Router />
          <GLobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
