import { Outlet, useNavigate, useLocation } from "react-router";
import taijutu from "../Images/Taijutu.png"
import './Layout.css'


function Layout() {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    return (
        <div className="layout-main">
            <header className="header">
                <img src={taijutu} alt="Taijutu representing Taijiquan"/>
                <span>Northern Wu Taiji</span>
            </header>
            <nav id="navigation-bar" className="nav-bar">
                <div id="navigation-list" className="nav-list" >
                    <div className={"nav-element" + (currentPage.includes("/Home") || currentPage === ("/") ? " active" : "")} onClick={() => navigate("/Home")}>
                        <span>Home</span>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Forms") ? " active" : "")} onClick={() => navigate("/Forms")}>
                        <span>Forms</span>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/QiGong") ? " active" : "")} onClick={() => navigate("/QiGong")}>
                        <span>QiGong</span>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Applications") ? " active" : "")} onClick={() => navigate("/Applications")}>
                        <span>Applications</span>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Foundations") ? " active" : "")} onClick={() => navigate("/Foundations")}>
                        <span>Foundations</span>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Information") ? " active" : "")} onClick={() => navigate("/Information")}>
                        <span>About</span>
                    </div>
                </div>
            </nav>
            
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    )

}

export default Layout
