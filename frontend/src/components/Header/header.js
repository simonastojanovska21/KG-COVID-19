import React from "react";
import logo from "../../images/covid.png"
const Header=(props)=>{
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-light blueBackground">
                <div className={"container"}>
                    <a className="navbar-brand" href="/">
                        <img src={logo} className={"logos"} alt={"logo"}/>
                        <span className={"title ps-3 align-middle"}> COVID-19</span>
                    </a>

                    <div className="collapse navbar-collapse justify-content-end">

                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item me-3 redBackground rounded">
                                <a className={"btn darkText fw-bold"} href={"/"}>Home</a>
                            </li>

                            <li className="nav-item me-3 redBackground rounded">
                                <a className={"btn darkText fw-bold"} href={"/dashboard"}>Dashboard</a>
                            </li>

                            <li className="nav-item me-3 redBackground rounded">
                                <a className={"btn darkText fw-bold"} href={"/statistics"}>Statistics</a>
                            </li>
                        </ul>

                    </div>

                    </div>
            </nav>
        </header>
    )
}

export default Header;