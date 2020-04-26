import React from 'react';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid footer">
                <div className="row">
                    <div className="text-center col-lg-6 offset-lg-3">
                        <br/>
                        <p>Copyright © 2019 RaLaVay.web.app</p></div>
                </div>
                <ScrollUpButton/>
            </div>
        );
    }
}

export default Footer;