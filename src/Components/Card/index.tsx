import { CardProps } from '../../Types/Card';
import Style from './Card.module.scss'

const Card = ({ imageUrl, title, description, }:CardProps) => {
    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className={Style.Container} style={containerStyle}>
            <div className={Style.Box}>
                <h4 className={Style.Title}>{title}</h4>
                <h2 className={Style.Text}>{description}</h2>
                <button className={Style.Button}>Saiba Mais</button>

            </div>
        </div>
        
    );
}

export default Card;
