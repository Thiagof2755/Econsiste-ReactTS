import Style from "./Footer.module.scss"
import { FaMapLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className={Style.Container}>
            <div className={Style.Box}>
                
                <div className={Style.Space}>
                    <h1 className={Style.Title}>Endereço</h1>
                    <h4 className={Style.Text}>A ERP Consultoria é uma Empresa especializada na melhoria da Gestão dos negócios das organizações.</h4>
                    <p className={Style.Text}><FaMapLocationDot /> R. Delfim Moreira, 339 - Custódio Pereira</p>
                    <p className={Style.Text}>  Uberlandia MG</p>
                    <p className={Style.Text}>CEP: 38405-208</p>


                </div>
                <div className={Style.Space}>
                    <h1 className={Style.Title}> Contato</h1>
                    <p className={Style.Text}><IoCall className={Style.Icon} / > (34)9918-3213</p>
                    <p className={Style.Text}>  <MdEmail className={Style.Icon} />suporte@econsiste.com.br</p>



                </div>
                <div className={Style.Space}>
                    <h1 className={Style.Title}>Redes Sociais</h1>
                    <h4 className={Style.Text}>Saiba mais sobre a Econsiste Consultoria acessando nossas redes sociais.</h4>
                    <div className={Style.Social}>
                        <div> <ImFacebook2 /></div>
                        <div> <GrInstagram /></div>
                        <div> <ImLinkedin /></div>
                        <div> <TbBrandYoutubeFilled /></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer