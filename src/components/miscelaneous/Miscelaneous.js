import React from "react";
import { Container, BreakLine } from "./styles/MiscelaneousStyles";

export default function Misc({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Misc.WhiteBreakLine = function WhiteBreakLine({ children, ...restProps}) {
    return <BreakLine margin="0" {...restProps}/>
}
