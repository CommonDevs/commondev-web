import React from 'react';

import HeaderContainer from './containers/HeaderContainer';
import ProjectContainer from './containers/ProjectContainer';
import InfoContainer from './containers/InfoContainer';
import ProjectShowcase from './components/showcase/Showcase';

function App() {

  return (
    <React.Fragment>

      <HeaderContainer/>

      <InfoContainer/>
      
  
      <ProjectShowcase.ShowContainer>
        <ProjectShowcase.ShowcaseTitle>
          Projects Showcase
        </ProjectShowcase.ShowcaseTitle>
        <div style={{ width: "90%", height: "1px", backgroundColor: "#f5f5f5" }} />
        <ProjectContainer/>
        <ProjectContainer/>
        <ProjectContainer/>
      </ProjectShowcase.ShowContainer>
      
    </React.Fragment>
  );
}

export default App;
