import React from "react";
import { Container, FirstCardBox, CardBox, InfoWrapper, CardTitle, CardDescription, CardImage, HorizontalWrapper } from "./styles/InfoStyles";

export default function Info({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Info.Card = function Card({ children, fillColor="#00604E", textColor="white", ...restProps }) {
    return(
        <CardBox fillColor={fillColor} textColor={textColor}{...restProps}>
            {children}
        </CardBox>
    )
}

Info.FirstCard = function FirstCard({ children, fillColor="#00604E", textColor="white", ...restProps }) {
    return(
        <FirstCardBox fillColor={fillColor} textColor={textColor}{...restProps}>
            {children}
        </FirstCardBox>
    )
}

Info.Wrapper = function Wrapper({ children, align, margin="0", ...restProps }) {
    return(
        <InfoWrapper align={align} margin={margin} {...restProps}>
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

