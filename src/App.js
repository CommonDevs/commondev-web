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
function App() {

  return (
    <React.Fragment>

      <HeaderContainer />
      <InfoContainer />
      <ProjectShowcase.ShowContainer>
        <ProjectShowcase.ShowcaseTitle>
          Projects Showcase
        </ProjectShowcase.ShowcaseTitle>
        <div style={{ width: "90%", height: "1px", backgroundColor: "#f5f5f5" }} />
        <ProjectContainer title="CONFESIONES" text="Juega con tus amigos y diviértete leyendo sus pensamientos y poniéndoselo dificil para que no te ganen a ti.
        Confesiones es un juego de preguntas y respuestas multijugador de 3 a 8 personas"
        QRSvg={ConfesionesQR} Icon={ConfesionesIcon} images={[ConfesionesScreen1, ConfesionesScreen2, ConfesionesScreen3, ConfesionesScreen4]} />
        <ProjectContainer title="QUICKLY PRESS THE BUTTON!" text="Una vez al día tu y todo el mundo, en el mismo momento, tendreís la oportunidad de pulsar el botón.
        Sé  el más rapido y vence a todos."
        QRSvg={QuicklyQR} Icon={QuicklyIcon} images={[QuicklyScreen1, QuicklyScreen2, QuicklyScreen3]} carousel_width="243px"/>
      </ProjectShowcase.ShowContainer>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
