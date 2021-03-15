import React from 'react';
import Header from './components/header/Header';
import Info from './components/info/Info';

function App() {
  return (
    <React.Fragment>
      <Header>
        <Header.Box>
          <Header.Team>
            Common Devs
          </Header.Team>
          <Header.Description>
            Mobile App Development Team
          </Header.Description>
        </Header.Box>
        <Header.Contact>Talk to us!</Header.Contact>
      </Header>
      <Info>
        <Info.Main>
          He
        </Info.Main>
        <Info.Card>
          <Info.Wrapper>
            <Info.Title>
              HOLA
            </Info.Title>
            <Info.Description>
              Wassup bitches
            </Info.Description>
          </Info.Wrapper>
        </Info.Card>
        <Info.Card>
          HOLA
        </Info.Card>
        <Info.Card>
          HOLA
        </Info.Card>
      </Info>
    </React.Fragment>
  );
}

export default App;
