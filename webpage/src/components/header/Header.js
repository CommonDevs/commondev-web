import React from "react";
import { Container, TeamBox, TeamName, TeamDescription, ContactButton } from "./styles/HeaderStyles";

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Team = function Team({ children, ...restProps }) {
    return(
        <TeamName {...restProps}>
            {children}
        </TeamName>
    )
}

Header.Box = function Box({ children, ...restProps }) {
    return(
        <TeamBox {...restProps}>
            {children}
        </TeamBox>
    )
}

Header.Description = function Description({ children, ...restProps }) {
    return(
        <TeamDescription {...restProps}>
            {children}
        </TeamDescription>
    )
}

Header.Contact = function Contact({ children, ...restProps }) {
    return(
        <ContactButton {...restProps}>
            {children}
        </ContactButton>
    )
}
