import React from "react";
import { Container, MainCard, CardBox, InfoWrapper, CardTitle, CardDescription } from "./styles/InfoStyles";

export default function Info({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Info.Main = function Main({ children, ...restProps }) {
    return(
        <MainCard {...restProps}>
            {children}
        </MainCard>
    )
}

Info.Card = function Card({ children, ...restProps }) {
    return(
        <CardBox {...restProps}>
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
