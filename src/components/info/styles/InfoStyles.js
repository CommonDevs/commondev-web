import styled from 'styled-components';

export const Container = styled.div `
    position: relative;
    top: -150px;
    border-radius: 50px 0 0 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: #00604E;
    margin-left:auto;
    width: 50%;
    overflow: hidden;
    box-shadow: 0px 0px 15px 1px #202020;
    cursor: default;
    @media (max-width: 1000px) {
        margin: 0;
        width: 100%;
        border-radius: 0;
        top: -100px;
    }
`;

export const FirstCardBox = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 225px;
    background-color: ${props => props.fillColor};
    color: ${props => props.textColor};
    @media (max-width: 1000px) {
        height: 150px;
        font-size: 0;
        padding: 15px;
    }
`;

export const CardBox = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 225px;
    background-color: ${props => props.fillColor};
    color: ${props => props.textColor};
    @media (max-width: 1000px) {
        height: 150px;
    }
`;

export const InfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.align};
    margin: ${props => props.margin};
    width: 100%;
`;

export const HorizontalWrapper = styled.div `
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    //border: 1px solid red;
`;

export const CardTitle = styled.h2 `
    margin: 0;
    font-size: 32px;
`;

export const CardDescription = styled.p `
    margin: 0 0 0 1px;
    font-size: 18px;
`;

export const CardImage = styled.div `
    margin-left: 10%;
    @media (max-width: 1000px) {
        display: none;
    }
`;