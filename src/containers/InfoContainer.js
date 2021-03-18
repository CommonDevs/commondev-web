import React from 'react';
import Info from '../components/info/Info';

export function InfoContainer(color, width) {
    return (
        <Info>
                <Info.Card>
                    <Info.Image specifiedImage="hey" color="white" width="96px"></Info.Image>
                    <Info.Wrapper>
                        <Info.Title>Hola</Info.Title>
                        <Info.Description>Hey</Info.Description>
                    </Info.Wrapper>             
                </Info.Card>
        </Info>
    )
}