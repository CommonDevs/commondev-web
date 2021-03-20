import React from 'react';
import ProjectShowcase from '../components/showcase/Showcase';
import ConfesionesIcon from '../images/confesiones-icon.png';

export default function ProjectContainer() {
    return (
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
    )
}
