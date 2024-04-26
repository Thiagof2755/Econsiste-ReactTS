import Style from './About.module.scss';
import Card from '../../../../Components/Card';
import ImgTeste from './assets/IMGINOVACAO.jpeg';

const About = () => {
    return (
        <div className={Style.Container}>
            <Card imageUrl={ImgTeste} title='Inovação' description='Lorem ipsum dolor sit amet consectetur' link='' />
            <Card imageUrl={ImgTeste} title='Consultoria' description='Lorem ipsum dolor sit amet consectetur' link='' />
            <Card imageUrl={ImgTeste} title='Suporte' description='Lorem ipsum dolor sit amet consectetur' link='' />
        </div>

    )
}
export default About