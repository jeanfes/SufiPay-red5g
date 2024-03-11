import { useNavigate } from "react-router-dom";
import { LogoSufi } from "../../assets/LogoSufi";
import LogOut from "../../assets/LogOut.png";
import "./header.scss";

export const Header = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate("/login");
    }

    return (
        <header className="headerDashboard">
            <picture>
                <LogoSufi width={84} height={23} />
            </picture>
            <button id="buttonLogOut" onClick={handleLogOut}>
                <p>Cerrar sesión</p>
                <img src={LogOut} alt="logout" />
            </button>
        </header>
    )
}
