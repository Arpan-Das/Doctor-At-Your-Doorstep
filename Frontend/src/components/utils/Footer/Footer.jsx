import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">

                    <div className="footer-top">
                        <div>
                            <a href="#">Privacy Policy</a>
                        </div>
                        <div>
                            <a href="#">Terms Of Use</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright" field="text" style={{ "color": "#ebebeb" }}>
                            (c) Doctor At Your Home 2018-2021
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
