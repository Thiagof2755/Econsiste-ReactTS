import Style from './About.module.scss';
import Card from '../../../Components/Card';
import data from './data/Card.json'; 
import Img from './assets/CardSobre.jpg'

const IMG =[Img,Img,Img]

const About = () => {
    return (
        <div className={Style.Container}>
            <div className={Style.Cards}>
                {data.map((item, index) => (
                    <Card
                        key={index}
                        imageUrl={IMG[index]}
                        title={item.title}
                        description={item.description}
                        paragrafo={item.paragrafo}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;
