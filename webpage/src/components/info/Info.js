import React from "react";
import { Container, CardBox, InfoWrapper, CardTitle, CardDescription, CardImage, HorizontalWrapper } from "./styles/InfoStyles";

export default function Info({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Info.Card = function Card({ children, fillColor="#00604E", textColor="white", ...restProps }) {
    return(
        <CardBox fillColor={fillColor} textColor={textColor}{...restProps}>
            {children}
        </CardBox>
    )
}

Info.Wrapper = function Wrapper({ children, ...restProps }) {
    return(
        <InfoWrapper {...restProps}>
            {children}
        </InfoWrapper>
    )
}

Info.Hwrapper = function Hwrapper({ children, ...restProps }) {
    return(
        <HorizontalWrapper {...restProps}>
            {children}
        </HorizontalWrapper>
    )
}   

Info.Title = function Title({ children, ...restProps }) {
    return(
        <CardTitle {...restProps}>
            {children}
        </CardTitle>
    )
}

Info.Description = function Description({ children, ...restProps }) {
    return(
        <CardDescription {...restProps}>
            {children}
        </CardDescription>
    )
}

Info.Image = function Image({ children, ...restProps }) {
    return (
        <CardImage {...restProps}>
            {children}
            </CardImage>
    )
   
}

