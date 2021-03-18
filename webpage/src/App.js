import React from 'react';
import Header from './components/header/Header';
import Info from './components/info/Info';
import { ReactComponent as DevImage } from './images/coding.svg';
import { ReactComponent as ExpImage } from './images/compass.svg';
import { ReactComponent as InnImage } from './images/light-bulb.svg';

function App() {

  return (
    <React.Fragment>

      {/*Encabezado*/}
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

      {/*Carta informativa*/}
      <Info>

        <Info.Card fillColor="#DCFFF9" textColor="#00604E">
          <Info.Wrapper margin="0 0 0 5%">
            <Info.Title>
              What do we offer?
            </Info.Title>
            <Info.Hwrapper>
              <Info.Wrapper align="center" margin="0 0 0 -5%">
                <DevImage width="96px" height="auto"/>
                <b><p style={{margin: "5px 0 0 0", color: "black"}}>Development</p></b>
              </Info.Wrapper>
              <Info.Wrapper align="center">
                <ExpImage width="96px" height="auto"/>
                <b><p style={{margin: "5px 0 0 0", color: "black"}}>Exploration</p></b>
              </Info.Wrapper>
              <Info.Wrapper align="center">
                <InnImage width="96px" height="auto"/>
                <b><p style={{margin: "5px 0 0 0", color: "black"}}>Innovation</p></b>
              </Info.Wrapper>
            </Info.Hwrapper> 
          </Info.Wrapper>  
        </Info.Card>
        <Info.Card>
          <Info.Image>
            <DevImage fill="white" width="96px" height="auto" />
          </Info.Image>
          <Info.Wrapper margin="0 0 0 5%">
            <Info.Title>Development</Info.Title>
            <Info.Description>Blablal with very labal a lot so very good  yes ye sy</Info.Description>
          </Info.Wrapper>
        </Info.Card>
        <div style={{width: "90%", height: "1px", backgroundColor: "#DCFFF9"}} />
        <Info.Card>
          <Info.Image>
            <ExpImage fill="white" width="96px" height="auto" />
          </Info.Image>
          <Info.Wrapper margin="0 0 0 5%">
            <Info.Title>Exploration</Info.Title>
            <Info.Description>We dive deep into minds to fing what´s best</Info.Description>
          </Info.Wrapper>
        </Info.Card>
        <div style={{width: "90%", height: "1px", backgroundColor: "#DCFFF9"}} />
        <Info.Card>
          <Info.Image>
            <InnImage fill="white" width="96px" height="auto" />
          </Info.Image>
          <Info.Wrapper margin="0 0 0 5%">
            <Info.Title>Innovation</Info.Title>
            <Info.Description>O que xlldlelell jadjk noo eee ni tan mal</Info.Description>
          </Info.Wrapper>
        </Info.Card>

      </Info>

    </React.Fragment>
  );
}

export default App;
