import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const MainTitle = styled.div`
    font-size: 96px;
    color: white;
    width: 90%;
    @media (max-width: 1000px) {
        font-size: 36px;
    }
`;

export const Showcase = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 2% 0;
    width: 90%;
    @media (max-width: 1000px) {
        margin: 10% 0 10% 0;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items:center;
        @media (max-width: 1000px) {
            flex-direction: column;
        }
`;

export const Description = styled.div`
    flex: 2 2 100%;
    margin: 0 3% 0 0;
    @media (max-width: 1000px) {
        margin: 0 0 5% 0;
    }
    
`;
export const Title = styled.div`
    display: flex;
    align-items:center;
    margin: 0 0 1% 0;
`;

export const TitleText = styled.div`
    display: flex;
    font-weight: 700;
    color:white;
    font-size:28px;
    margin-left: 3%;
    @media (max-width: 1000px) {
        font-size: 20px;
    }
    
`;
export const Text = styled.div`
    color:white;
    font-weight: 400;
    font-size:28px;
    text-shadow: 1px 1px 4px rgba(0,0,0, 0.5);
    text-align: justify;
    @media (max-width: 1000px) {
        font-size: 16px;
    }
`;
export const CarouselStyle = styled.div`
 
`;

export const QRCode = styled.div`
    display: flex;
`;

