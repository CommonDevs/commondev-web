import React from 'react';
import ProjectShowcase from '../components/showcase/Showcase';
import Misc from '../components/miscelaneous/Miscelaneous';

import Carousel from '../components/carousel/Carousel';

export default function ProjectContainer({QRSvg,Icon,title = "",text ="",images = [],carousel_width}) {
    return (
      <React.Fragment> 
        <ProjectShowcase>
          <ProjectShowcase.Header>
            <ProjectShowcase.Description>
              <ProjectShowcase.Title src={Icon}>
                {title}
              </ProjectShowcase.Title>
              <ProjectShowcase.Text>
               {text}
              </ProjectShowcase.Text>
            </ProjectShowcase.Description>
            <ProjectShowcase.QRCode>
            
            {QRSvg? <QRSvg width="256px" height="256px" fill="rgb(0,0,0)" /> : null}
            </ProjectShowcase.QRCode>
          </ProjectShowcase.Header>
         
        </ProjectShowcase>
        <Carousel images={images} carousel_width={carousel_width}/>
        <Misc.WhiteBreakLine margin="2% 0 2% 0"/>
      </React.Fragment>
      )
      
}
