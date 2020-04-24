import React from 'react';
import '../App.css'

class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid header">
                <div className="row">
                    {/*<div className="col-sm-1 col-md-1 col-lg-1 col-xl-1">*/}

                    {/*</div>*/}
                    <div className="col-sm-2 col-md-1 col-lg-1 col-xl-2 col-1" style={{ margin: "auto 0 auto 0", textAlign:"center"}}>
                        <a href="/">
                            <img src="/logo192.png" className="image" alt={""}/>
                        </a>
                        AI Image
                    </div>

                    <div className="col-sm-10 col-md-7 col-lg-7 col-xl-5 col-8">
                        <nav className="navbar navbar-expand-lg navbar-light">

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Image
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Image Inpainting</a>
                                            {/*<a className="dropdown-item" href="#">Another action</a>*/}
                                            {/*/!*<div className="dropdown-divider"></div>*!/*/}
                                            {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Video
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Video Inpainting</a>
                                            {/*<a className="dropdown-item" href="#">Another action</a>*/}
                                            {/*/!*<div className="dropdown-divider"></div>*!/*/}
                                            {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;