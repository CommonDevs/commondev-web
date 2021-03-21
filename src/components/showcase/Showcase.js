import React from "react";
import { Showcase, Container, MainTitle, Header, Title, TitleText, Text, Description, QRCode } from "./styles/ShowcaseStyles";

export default function ProjectShowcase({ children, ...restProps }) {
    return <Showcase {...restProps}>{children}</Showcase>;
}

ProjectShowcase.ShowContainer = function ShowContainer({ children, ...restProps}) {
    return <Container {...restProps}>
        {children}
    </Container>
}

ProjectShowcase.ShowcaseTitle = function ShowcaseTitle({ children, ...restProps}) {
    return <MainTitle {...restProps}>
        {children}
    </MainTitle>
}

ProjectShowcase.Header = function HeaderDiv({ children, ...restProps }) {
    return (
        <Header {...restProps}>
            {children}
        </Header>
    )
}

ProjectShowcase.Description = function DescriptionDiv({ children, ...restProps }) {
    return (
        <Description {...restProps}>
            {children}
        </Description>
    )
}
ProjectShowcase.Icon = function IconDiv({ src }) {
    return (
        <div>
            <img width="56px" height="56px" src={src} alt="App Icon" />
        </div>
    )
}

ProjectShowcase.TitleText = function TitleTextDiv({ children, ...restProps }) {
    return (
        <TitleText {...restProps}>
            {children}
        </TitleText>
    )
}
ProjectShowcase.Title = function TitleDiv({ children, src, ...restProps }) {
    return (
        <Title {...restProps}>
            {ProjectShowcase.Icon(src = { src })}
            {ProjectShowcase.TitleText(children = { children })}
        </Title>
    )
}
ProjectShowcase.Text = function TextDiv({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    )
}
ProjectShowcase.QRCode = function QRCodeDiv({ children, ...restProps }) {
    return (
        <QRCode {...restProps}>
            {children}
        </QRCode>
    )
}
ProjectShowcase.Carousel = function CarouselDiv({ children, images }) {
    return (
        <div >
        {/* <Carousel offset={-1000}
            plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 2,
                    },
                },
                {
                    resolve: slidesToScrollPlugin,
                    options: {
                        numberOfSlides: 2,
                    },
                },
            ]}
        >
            {images.map(path => {
                return <img src={path} />;
            })}
        </Carousel> */}
        </div>
    );
}

