import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { ProfileContent } from "./components/ProfileContent";
import { GLobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <ProfileContent />
        <GLobalStyle />
      </ThemeProvider>
    </div>
  );
}
