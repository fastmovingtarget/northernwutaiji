import { Outlet, useNavigate, useLocation } from "react-router";


function Layout() {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    <div className="layout-main">
        <nav id="navigation-bar" className="nav-bar">
            <div id="navigation-list" className="nav-list" >
                <div className={"nav-element" + (currentPage.includes("/Home") || currentPage === ("/") ? " active" : "")} onClick={() => navigate("/Home")}>
                    <p>Home</p>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>

}

export default Layout
