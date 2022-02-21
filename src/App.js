import React from 'react';

import HeaderContainer from './containers/HeaderContainer';
import ProjectContainer from './containers/ProjectContainer';
import InfoContainer from './containers/InfoContainer';
import ProjectShowcase from './components/showcase/Showcase';
import Footer from './components/footer/Footer';

// Confesiones Data
import ConfesionesIcon from './images/confesiones-icon.png';
import ConfesionesScreen1 from './images/confesiones1.png';
import ConfesionesScreen2 from './images/confesiones2.png';
import ConfesionesScreen3 from './images/confesiones3.png';
import ConfesionesScreen4 from './images/confesiones4.png';
import { ReactComponent as ConfesionesQR } from './images/confesiones-qr-code.svg';


// Quickly Data
import QuicklyIcon from './images/quickly-icon.png';
import QuicklyScreen1 from './images/quickly1.png';
import QuicklyScreen2 from './images/quickly2.png';
import QuicklyScreen3 from './images/quickly3.png';
import { ReactComponent as QuicklyQR } from './images/quickly-qr-code.svg';

import { Routes, Route } from "react-router-dom";
import FirstPartySetComponent from './components/firstpartyset/FirstPartySet';
function App() {

  return (
    <Routes>
      <Route path="/" element={
      <React.Fragment>
        <HeaderContainer />
        <InfoContainer />
        <ProjectShowcase.ShowContainer>
          <ProjectShowcase.ShowcaseTitle>
            Projects Showcase
          </ProjectShowcase.ShowcaseTitle>
          <div style={{ width: "90%", height: "1px", backgroundColor: "#f5f5f5" }} />
          <ProjectContainer title="CONFESSIONS" text="Born in the heat of a party, Confessions gives a much refreshing and needed change into the party gaming scene.
           Play with your friends and have fun diving in their minds and outplaying them.
           Confessions is an online mutiplayer game from 3 to 8 players."
            QRSvg={ConfesionesQR} Icon={ConfesionesIcon} images={[ConfesionesScreen1, ConfesionesScreen2, ConfesionesScreen3, ConfesionesScreen4]} />
          <ProjectContainer title="QUICKLY PRESS THE BUTTON!" text="New and simple can still be discovered. Once a day and at the same time, you and everyone who is playing get the chance to press the button.
           Complete globally,rank up in the leaderboard and have an adrenaline shot when you see the notification."
            QRSvg={QuicklyQR} Icon={QuicklyIcon} images={[QuicklyScreen1, QuicklyScreen2, QuicklyScreen3]} carousel_width="243px" />
        </ProjectShowcase.ShowContainer>
        <Footer></Footer>
      </React.Fragment>}/>
      <Route path="/firstpartyset" element={<FirstPartySetComponent/>}/>
    </Routes>


  );
}

export default App;
