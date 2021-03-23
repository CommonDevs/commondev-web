import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;
export const BreakLine = styled.div`
    width: 90%;
    height: 1px;
    background-color:#DCFFF9;
    margin: ${props => props.margin};
    @media (max-width: 1000px) {
        .carousel_line{
            margin-top:7%;
        } 
    }
`;