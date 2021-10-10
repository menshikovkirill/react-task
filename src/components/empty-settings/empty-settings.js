import React from "react";
import { Link } from 'react-router-dom';

import './empty-settings.scss';

const EmptySettings = () => {
    return <div className="empty-settings">
        <div className="logo"></div>
        <div className="description">Configure repository connection and synchronization settings</div>
        <Link to="/settings"><button className="button-yellow">Open settings</button></Link>
    </div>
}

export default EmptySettings;
    