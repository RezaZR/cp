import React, { Component } from "react";

class Header extends Component {

    render() {
        return (
            <header className="header-wrapper">
        <div className="header-desktop">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="header-logo">
                            <a href="#"><img src="assets/images/header-talkabot.png" alt="Talkabot Logo" /></a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="menu">
                            <nav>
                                <ul>
                                    <li><a href="#about">TENTANG</a></li>
                                    <li><a href="#skillset">SKILLSET</a></li>
                                    <li><a href="#price">HARGA</a></li>
                                    <li><a href="#registration">REGISTRASI</a></li>
                                    <li><a href="#contact">KONTAK</a></li>
                                    <li><a className="btn-black" href="https://admin.talkabot.id/login">LOGIN</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-sidebar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-7">
                        <div className="header-logo">
                            <a href="#"><img src="assets/images/header-talkabot.png" alt="Talkabot Logo" /></a>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="sidebar-logo d-flex justify-content-end">
                            <a id="open" href="#" onclick="openSidebar()"><i className="fa fa-bars"></i></a>
                            <a id="close" href="#" onclick="closeSidebar()"><i className="fa fa-times"></i></a>
                        </div>
                    </div>
                </div>
                <div className="menu-sidebar" id="menu-sidebar">
                    <nav>
                        <ul>
                            <li><a className="anchor-sidebar" href="#about">TENTANG</a></li>
                            <li><a className="anchor-sidebar" href="#skillset">SKILLSET</a></li>
                            <li><a className="anchor-sidebar" href="#price">HARGA</a></li>
                            <li><a className="anchor-sidebar" href="#registration">REGISTRASI</a></li>
                            <li><a className="anchor-sidebar" href="#contact">KONTAK</a></li>
                            <li><a className="anchor-sidebar red-text" href="https://admin.talkabot.id/login">LOGIN</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

        );
    }
}

export default Header;