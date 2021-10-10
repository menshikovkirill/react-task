import React, { useState } from 'react';

import './add-form.scss';

const AddForm = ({isActive, setActive}) => {
    return <>
        <div className={isActive ? "show popup-layer-wrapper": "popup-layer-wrapper"} onClick={() => setActive(false)}></div> 
        <div className={isActive ? "show popup-layer" : "popup-layer"} >
            <div className="title">New build</div>
            <div className="description">Enter the commits hash which you want to build</div>
            <input placeholder="Commit hash" />
            <div className="buttons">
                <button className="button-yellow" onClick={() => setActive(false)}>Run build</button>
                <button onClick={() => setActive(false)}>Cancel</button>
            </div>
        </div>
    </>
}

export default AddForm;