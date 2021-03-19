import React from 'react';
import Header from './components/header/Header';
import Info from './components/info/Info';
import { ReactComponent as DevImage } from './images/coding.svg';
import { ReactComponent as ExpImage } from './images/compass.svg';
import { ReactComponent as InnImage } from './images/light-bulb.svg';
import ProjectShowcase from './components/showcase/Showcase';
import ConfesionesIcon from './images/confesiones-icon.png';
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
            <ExpImage fill="white" width="96px" height="auto" />
          </Info.Image>
          <Info.Wrapper margin="0 0 0 5%">
            <Info.Title>Exploration</Info.Title>
            <Info.Description>We dive deep in the market to find what´s best</Info.Description>
          </Info.Wrapper>
        </Info.Card>
        
        <div style={{ width: "90%", height: "1px", backgroundColor: "#DCFFF9" }} />
        <Info.Card>
          <Info.Image>
            <InnImage fill="white" width="96px" height="auto" />
          </Info.Image>
          <Info.Wrapper margin="0 0 0 5%">
            <Info.Title>Innovation</Info.Title>
            <Info.Description>We test new ideas to find success</Info.Description>
          </Info.Wrapper>
        </Info.Card>
     
        <div style={{ width: "90%", height: "1px", backgroundColor: "#DCFFF9" }} />
        <Info.Card>
          <Info.Image>
            <DevImage fill="white" width="96px" height="auto" />
          </Info.Image>
          <Info.Wrapper  margin="0 0 0 5%">
            <Info.Title>Development</Info.Title>
            <Info.Description>We design and implement clean and scalable software</Info.Description>
          </Info.Wrapper>
        </Info.Card>
        
      </Info>
      <div id="projects-showcase-title">
        Projects Showcase
        <div style={{ width: "90%", height: "1px", backgroundColor: "#DCFFF9", position:"relative",right:"60px",marginBottom:"100px"}} />
      </div>

      <ProjectShowcase >
        <ProjectShowcase.Header>
        <ProjectShowcase.Description>
            <ProjectShowcase.Title src={ConfesionesIcon}>
            CONFESIONES
            </ProjectShowcase.Title>
            <ProjectShowcase.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProjectShowcase.Text>
          </ProjectShowcase.Description>
        <ProjectShowcase.QRCode />
        </ProjectShowcase.Header>
        <ProjectShowcase.Carousel>

        </ProjectShowcase.Carousel>
      </ProjectShowcase>

    </React.Fragment>
  );
}

export default App;
