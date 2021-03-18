import styled from 'styled-components';

export const Container = styled.div `
    position: absolute;
    top: 60%;
    border-radius: 50px 0 0 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: #00604E;
    margin: 0;
    width: 50%;
    //border: 1px solid pink;
    overflow: hidden;
`;

export const CardBox = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 225px;
    background-color: ${props => props.fillColor};
    color: ${props => props.textColor};
`;

export const InfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
    width: 100%;
`;

export const HorizontalWrapper = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
    border: 1px solid red;
`;

export const CardTitle = styled.h2 `
    margin: 0;
    font-size: 32px;
`;

export const CardDescription = styled.p `
    margin: 0 0 0 2px;
    font-size: 18px;
`;

export const CardImage = styled.div `
    margin-left: 10%;
`;