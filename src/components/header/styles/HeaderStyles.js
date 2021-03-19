import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    margin: 0;
    width: 100%;
    background-color: #202020;
    height: 80vh;
    align-items: flex-start;
    justify-content: space-around;
    //border: 1px solid pink;
`;

export const TeamBox = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    top: 10%;
    right: 5%;
    //border: 1px solid red;
    cursor: default;
`;

export const TeamName = styled.h1 `
    margin: 0;
    padding: 0;
    font-size: 120px;
    font-weight: 300;
    color: white;
    //border: 1px solid yellow;
`;

export const TeamDescription = styled.h3 `
    font-weight: 300;
    margin: 0 0 0 8px;
    font-size: 24px;
    color: white;
    //border: 1px solid blue;
`;

export const ContactButton = styled.button `
    position: relative;
    top: 10%;
    border: 1px solid white;
    color: white;
    font-size: 24px;
    background-color: #202020;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
    }
`;