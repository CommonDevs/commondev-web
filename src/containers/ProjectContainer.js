import React from 'react';
import ProjectShowcase from '../components/showcase/Showcase';
import ConfesionesIcon from '../images/confesiones-icon.png';
import { ReactComponent as ConfesionesQR } from '../images/qr-code.svg';

export default function ProjectContainer() {

    return (
      <React.Fragment>
        <ProjectShowcase>
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
            <ProjectShowcase.QRCode>
              <ConfesionesQR width="256px" height="256px" fill="rgb(0,0,0)"/>
            </ProjectShowcase.QRCode>
          </ProjectShowcase.Header>
          <ProjectShowcase.Carousel>
          </ProjectShowcase.Carousel>
        </ProjectShowcase>
        <div style={{ width: "90%", height: "1px", backgroundColor: "#DCFFF9" }} />
      </React.Fragment>
      )
      
}
