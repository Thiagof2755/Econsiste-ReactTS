import styled from 'styled-components';

interface PanelFlashyProps {
    backgroundImage: string;
    headline2: string;
    title1: string;
    title2: string;
    text: string;
    buttonText1: string;
    buttonText2: string;
}

const PanelFlashy: React.FC<PanelFlashyProps> = ({
    backgroundImage,
    headline2,
    title1,
    title2,
    text,
    buttonText1,
    buttonText2
}) => {
    return (
        <Container style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Box>
                <div className='HeadLine'>
                    <h2 className='SupHead'>______</h2>
                    <h1>{headline2}</h1>
                </div>
                <div className='Line'>
                    <h2 className='Title'>{title1}</h2>
                    <h2 className='SBTitle'>{title2}</h2>
                </div>
                <p>{text}</p>
                <div className='Buttons'>
                    <button className='Button1'>{buttonText1}</button>
                    <button className='Button2'>{buttonText2}</button>
                </div>
            </Box>
        </Container>
    )
}

export default PanelFlashy;

const Container = styled.div`
    background-size: 110%;
    background-repeat: no-repeat;
    width: 100%;
    height: 90vh;  
`;

const Box = styled.div`
    position : relative;
    max-width: 500px;
    padding:5%;
    margin-left: 8rem;

    .HeadLine {
        display: flex;
        flex-direction: start;
        max-width: 350px;
        height: 80px;

    }

    .SupHead {
        font-family: arial;
        font-weight: bold;
        margin-right: 10px;
        margin-top: 15px;
        color: #9CACB8;
        

    }

    h1 {
        font-family: "Roboto Condensed", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        color: #000000;
        font-size: 20px;
        word-break: normal;
        max-width: 20;
    }

    .Line {
        .Title {
            font-family: "Sarabun", sans-serif;
            font-weight: 800;
            font-size: 78px;
            font-style: normal;
            margin: 0;
            padding: 0;
            color: #003554;
            
        }

        .SBTitle {
            font-family: "Sarabun", sans-serif;
            font-weight: 800;
            font-size: 78px;
            font-style: normal;
            margin-top: -1rem;
            margin-bottom: 0;
            padding: 0;
            color: #9CACB8;
        }
    }

    p {
        font-family: "Roboto Condensed", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        color: #000000;
        font-size: 18px;
        word-break: normal;
        max-width: 20;
        margin-top: 1rem;
    }

    .Buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 3rem;
    }

    .Button1,
    .Button2 {
        font-family: "Sarabun", sans-serif;
        font-weight: 500;
        font-size: 18px;
        display: flex;
        align-items: center;
        padding: 18px 22px;
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
        border: none;
    }

    .Button1:hover {
        scale: 1.04;
        transition: 0.5s;
    }

    .Button2:hover {
        scale: 1.04;
        transition: 0.5s;
    }

    .Button1 {
        background-color: #9cacb8;
        margin-right: 10px;
    }

    .Button2 {
        background-color: #003554;
    }
`;
