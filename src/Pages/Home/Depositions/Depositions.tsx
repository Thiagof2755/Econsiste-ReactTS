import styled from 'styled-components';

interface DepositionsProps {
    backgroundImage: string;
    title1: string;
    title2: string;
    text: string;

}

const Depositions: React.FC<DepositionsProps> = ({
    title1,
    title2,
    text,
    backgroundImage,
}) => {
    return (
        <Container style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Box>
        <div className='Line'>
                    <h2 className='Title'>{title1}</h2>
                    <h2 className='SBTitle'>{title2}</h2>
                </div>
                <p>{text}</p>
            </Box>

        </Container>
    )
}
export default Depositions


const Container = styled.div`
    background-size: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 90vh;  
    .Line {
        .Title {
            font-family: "Sarabun", sans-serif;
            font-weight: 800;
            font-size: 64px;
            font-style: normal;
            margin: 0;
            padding: 0;
            color: #003554;
            
        }

        .SBTitle {
            font-family: "Sarabun", sans-serif;
            font-weight: 800;
            font-size: 64px;
            font-style: normal;
            margin-top: -1rem;
            margin-bottom: 0;
            padding: 0;
            color: #9CACB8;
        }
    }
`;

const Box = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 5%;

    p {
        font-family: "Roboto Condensed", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        color: #000000;
        font-size: 18px;
        word-break: normal;
        max-width: 600px;
        margin-top: 1rem;
    }
`;
