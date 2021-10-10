import React from 'react';

import './header.scss';

const Header = ({text, settingsButton, kind}) => {
    return (
        <div className="header">
            <p className={kind}>{text}</p>
            {settingsButton}
        </div>
    )
}

export default Header;