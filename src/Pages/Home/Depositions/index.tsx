import JsonData from "./data/Deps.json"
import Depositions from "./Depositions"
import Img from "./assets/Back.png"
const Deps = () => {
    return (
        <>
            <Depositions {...JsonData[0]} backgroundImage={Img} />
        </>
    )
}

export default Deps