import React from "react";

//  style
import { GlobalStyle, Description, Title, LinerR, Start } from "./styles";

// Components
import List from "./component/List";

import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#2d3142",
  backgroundColor: "#ffffff",
  blue: "#577399",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>My Time Line</Title>

      <Start>2020</Start>
      <LinerR></LinerR>
      <List />
    </ThemeProvider>
  );
}

export default App;
