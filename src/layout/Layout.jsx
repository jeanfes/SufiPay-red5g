import Dashboard from "../pages/private/dashboard/Dashboard";
import { Header } from "./header/Header";
import "./layout.scss"

const Layout = () => {
    return (
        <div className="layoutContainer">
            <Header />
            <Dashboard />
        </div>
    )
}

export default Layout;