import React from "react";
import Header from "./components/Header";
import CurrentMovie from "./components/CurrentMovie";
import MovieList from "./components/MovieList";
import styled from "styled-components";

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: grey 1px solid;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
  border: grey 1px solid;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  border: grey 1px solid;
`;

function App() {
  return (
    <div className="app-container">
      <Head className="header">
        <Header />
      </Head>
      <Body className="body">
        <Left>
          <CurrentMovie />
        </Left>
        <Right>
          <MovieList />
        </Right>
      </Body>
    </div>
  );
}

export default App;
