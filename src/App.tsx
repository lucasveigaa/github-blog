import { ThemeProvider } from "styled-components";
import { GLobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <h1>Oia</h1>

        <GLobalStyle />
      </ThemeProvider>
    </div>
  );
}
