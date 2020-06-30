import React from "react";

//  style
import { GlobalStyle, Description, Title } from "./styles";

// Components
import List from "./component/List";

import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#2d3142", // main font color
  backgroundColor: "#ffffff", // main background color
  blue: "#4f5d75",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Title>My Time Line</Title>

      <List />
    </ThemeProvider>
  );
}

export default App;
