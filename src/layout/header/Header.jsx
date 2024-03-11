import { LogoSufi } from "../../assets/LogoSufi";
import LogOut from "../../assets/LogOut.png";
import "./header.scss";

export const Header = () => {
    return (
        <header>
            <picture>
                <LogoSufi width={84} height={23} />
            </picture>
            <button id="buttonLogOut">
                <p>Cerrar sesion</p>
                <img src={LogOut} alt="logout" />
            </button>
        </header>
    )
}
