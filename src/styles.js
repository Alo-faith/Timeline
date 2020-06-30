import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #003049;
`;

const Description = styled.h2`
  text-align: center;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Evants = styled.div`
  border: 2px solid #2d3142;
  margin: 10px;
  text-align: center;
  width: 200px;

  h1 {
    font-size: 24px;
    }
  }
  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.blue};
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    color:  ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export { Title, Description, ListWrapper, Evants, GlobalStyle };
