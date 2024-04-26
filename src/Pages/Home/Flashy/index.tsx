
import Style from './Flashy.module.scss';
import PanelFlashy from './PanelFlashy';
import Img01 from './assets/img-slider-01.jpg'

const Flashy = () => {
    return (
        <>
        <PanelFlashy backgroundImage={Img01} />
        </>
    );
};

export default Flashy;
