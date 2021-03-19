import React from "react";
import { Showcase, Header,Title,TitleText,Text,Description,Carousel,QRCode } from "./styles/ShowcaseStyles";

export default function ProjectShowcase({ children, ...restProps }) {
    return <Showcase {...restProps}>{children}</Showcase>;
}

ProjectShowcase.Header = function HeaderDiv({ children, ...restProps }) {
    return(
        <Header {...restProps}>
            {children}
        </Header>
    )
}

ProjectShowcase.Description = function DescriptionDiv({ children, ...restProps }) {
    return(
        <Description {...restProps}>
            {children}
        </Description>
    )
}
ProjectShowcase.Icon = function IconDiv({src}) {
    return(
            <img width="56px" height="56px" src={src} alt="App Icon" />
    )
}

ProjectShowcase.TitleText = function TitleTextDiv({ children, ...restProps }) {
    return(
        <TitleText {...restProps}>
        {children}
        </TitleText>
    )
}
ProjectShowcase.Title = function TitleDiv({ children, src,...restProps }) {
    return(
        <Title {...restProps}>
        {ProjectShowcase.Icon(src={src})}
        {ProjectShowcase.TitleText(children = {children})}
        </Title>
    )
}
ProjectShowcase.Text = function TextDiv({ children, ...restProps }) {
    return(
        <Text {...restProps}>
            {children}
        </Text>
    )
}
ProjectShowcase.QRCode = function QRCodeDiv({ children, ...restProps }) {
    return(
        <QRCode {...restProps}>
            {children}
        </QRCode>
    )
}
ProjectShowcase.Carousel = function CarouselDiv({ children, ...restProps }) {
    return(
        <Carousel {...restProps}>
            {children}
        </Carousel>
    )
}

