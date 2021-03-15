import styled from 'styled-components';

export const Container = styled.div `
    position: absolute;
    top: 60%;
    border-radius: 50px 0 0 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
    width: 50%;
    //border: 1px solid pink;
    overflow: hidden;
`;

export const MainCard = styled.div `
    width: 100%;
    height: 200px;
    background-color: #DCFFF9;
    color: #00604E;
`;
export const CardBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 225px;
    background-color: #00604E;
    color: white;
`;

export const InfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h2 `
    margin: 0;
    font-size: 32px;
`;

export const CardDescription = styled.p `
    margin: 0 0 0 2px;
    font-size: 18px;
`;

export const CardImage = styled.img `
`;