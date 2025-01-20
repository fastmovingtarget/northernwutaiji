import { Outlet, useNavigate, useLocation } from "react-router";


function Layout() {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    return (
        <div className="layout-main">
            <header>
                Northern Wu Taiji
            </header>
            <nav id="navigation-bar" className="nav-bar">
                <div id="navigation-list" className="nav-list" >
                    <div className={"nav-element" + (currentPage.includes("/Home") || currentPage === ("/") ? " active" : "")} onClick={() => navigate("/Home")}>
                        <p>Home</p>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Forms") ? " active" : "")} onClick={() => navigate("/Forms")}>
                        <p>Form</p>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/QiGong") ? " active" : "")} onClick={() => navigate("/QiGong")}>
                        <p>QiGong</p>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Applications") ? " active" : "")} onClick={() => navigate("/Applications")}>
                        <p>Applications</p>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Foundations") ? " active" : "")} onClick={() => navigate("/Foundations")}>
                        <p>Foundations</p>
                    </div>
                    <div className={"nav-element" + (currentPage.includes("/Information") ? " active" : "")} onClick={() => navigate("/Information")}>
                        <p>About</p>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )

}

export default Layout
