import Style from './Navbar.module.scss';
import { IoCall } from "react-icons/io5";
import Logo from '../../assets/LOGO.png'

const Navbar = () => {
    const smoothScroll = (target: string) => {
        const element = document.querySelector(target) as HTMLElement;
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        smoothScroll(target);
    };

    return (
        <div className={Style.Container}>
            <ul className={Style.NavBar}>
                <div className={Style.Logo}>
                    <li><a href="/"  className={Style.Logo}><img src={Logo}alt="" />Econsiste</a></li>
                </div>
                <div className={Style.Menu}>
                    <li><a href="#Home" onClick={(e) => handleNavLinkClick(e, '#Home ')}>HOME</a></li>
                    <li><a href="#Servicos" onClick={(e) => handleNavLinkClick(e, '#Servicos')}>SERVIÇOS</a></li>
                    <li><a href="#Depoimento" onClick={(e) => handleNavLinkClick(e, '#Depoimento')}>DEPOIMENTOS</a></li>
                    <li><a href="#Blog" onClick={(e) => handleNavLinkClick(e, '#Blog')}>BLOG</a></li>
                    <li><a href="#Chamado" onClick={(e) => handleNavLinkClick(e, '#Chamado')}>CHAMADO</a></li>
                    <li className={Style.ButtonContainer}>
                        <a href="#Contato" onClick={(e) => handleNavLinkClick(e, '#Contato')} className={Style.Button}>
                            <IoCall className={Style.Icon} />CONTATO
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
    
};

export default Navbar;