import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="links">
                <a href="#">Support</a>
                <a href="#">Learning</a>
                <a href="#">Русская версия</a>
            </div>
            <div className="author">
                <p>&#169; 2021 Kirill Menshikov</p>
            </div>
        </div>
    );
}

export default Footer;