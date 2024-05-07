import { useState, useEffect } from 'react';
import PanelFlashy from './PanelFlashy';
import jsonData from './data/PanelFlashy.json';
import img1 from './assets/img-slider-01.jpg';


const images = [img1, img1, img1];

const Flashy = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % jsonData.length);
    };

    useEffect(() => {
        const intervalId = setInterval(handleNext, 6000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <PanelFlashy
                backgroundImage={images[currentIndex]}
                headline2={jsonData[currentIndex].headline2}
                title1={jsonData[currentIndex].title1}
                title2={jsonData[currentIndex].title2}
                text={jsonData[currentIndex].text}
                buttonText1={jsonData[currentIndex].buttonText1}
                buttonText2={jsonData[currentIndex].buttonText2}
            />
        </>
    );
};

export default Flashy;
