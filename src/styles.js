import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #003049;
  padding-top: 15px;
  margin-bottom: 30px;
  font-size: 45px;
`;

const Description = styled.h2`
  text-align: center;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  // display: flex;
`;

const Liner = styled.div`
  border-left: 6px solid #ce796b;
  height: 150px;
  margin-left: 50%;
  margin-right: 50%;
`;

const LinerR = styled.div`
  border-right: 6px solid #495867;
  margin-right: 50%;
  margin-left: 50%;
  height: 150px;
`;

const Evants = styled.div`
  border: 2px solid #ce796b;
  text-align: center;
  width: 300px;
  color: #ce796b;
  line-height: 0.3;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.blue};
  }
  img {
    width: 80px;
    height: 60px;
    padding-bottom: 0px;
  }

  &.r {
    border: 2px solid #495867;
    margin-left: -300px;
    color: #495867;
  }
`;

const Start = styled.div`
  border: 2px solid #495867;
  background-color: #495867;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  width: 200px;
  height: 60px;
  color: #ffffff;
  padding-top: 20px;
  padding-bottom: 0px;
  // display: flex;
  align-items: center;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color:  ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export {
  Start,
  LinerR,
  Liner,
  Title,
  Description,
  ListWrapper,
  Evants,
  GlobalStyle,
};
