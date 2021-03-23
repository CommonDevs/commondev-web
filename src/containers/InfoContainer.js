import React from 'react';
import Info from '../components/info/Info';
import Misc from '../components/miscelaneous/Miscelaneous';

import { ReactComponent as DevImage } from '../images/coding.svg';
import { ReactComponent as ExpImage } from '../images/compass.svg';
import { ReactComponent as InnImage } from '../images/light-bulb.svg';


export default function InfoContainer() {

    return (
        <Info>
            <Info.FirstCard fillColor="#DCFFF9" textColor="#00604E">
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
            </Info.FirstCard>
            <Info.Card>
                <Info.Image>
                    <DevImage fill="#f5f5f5" width="96px" height="auto" />
                </Info.Image>
                <Info.Wrapper  margin="0 0 0 5%">
                    <Info.Title>Development</Info.Title>
                    <Info.Description>We design and implement clean and scalable software.</Info.Description>
                </Info.Wrapper>
            </Info.Card>
            
            <Misc.WhiteBreakLine margin="0"/>

            <Info.Card>
                <Info.Image>
                    <ExpImage fill="#f5f5f5" width="96px" height="auto" />
                </Info.Image>
                <Info.Wrapper margin="0">
                    <Info.Title>Exploration</Info.Title>
                    <Info.Description>We dive deep in the market to find what´s best.</Info.Description>
                </Info.Wrapper>
            </Info.Card>

            <Misc.WhiteBreakLine margin="5px 5px 5px 5px"/>

            <Info.Card>
                <Info.Image>
                    <InnImage fill="#f5f5f5" width="96px" height="auto" />
                </Info.Image>
                <Info.Wrapper margin="0 0 0 5%">
                    <Info.Title>Innovation</Info.Title>
                    <Info.Description>We test new ideas to find success.</Info.Description>
                </Info.Wrapper>
            </Info.Card>  
        </Info>
    )
    
}