import React from 'react';
import ProjectShowcase from '../components/showcase/Showcase';


import Carousel from '../components/carousel/Carousel';
export default function ProjectContainer({QRSvg,Icon,title = "",text ="",images = []}) {

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
        <Carousel images={images}/>
        <div style={{ width: "90%", height: "1px", backgroundColor: "#DCFFF9", marginTop:"2%"}} />
      </React.Fragment>
      )
      
}
