import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

import './settings.scss';

const Settings = ({setData}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [disabledButton, setDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);

    async function onSubmit(data) {
        setDisabled(true);

        //function of connection to repository
        await new Promise((res, rej) => {
            const repositoryData = {
                name: data.repositoryName, 
                commits: [
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov", 
                        status: "success",
                        hash: "9c9f0b9", 
                        uploadTime: 90,
                        dateTime: new Date()
                    }, 
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov",
                        status: "error",
                        hash: "9c9f0b9", 
                        uploadTime: 76,
                        dateTime: new Date()
                    },
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov", 
                        status: "wait",
                        hash: "9c9f0b9",
                        uploadTime: 54,
                        dateTime: new Date()
                    },
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov",
                        status: "error",
                        hash: "9c9f0b9",
                        uploadTime: 43,
                        dateTime: new Date()
                    },
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov",
                        status: "success",
                        hash: "9c9f0b9", 
                        uploadTime: 240,
                        dateTime: new Date()
                    },
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov",
                        status: "success",
                        hash: "9c9f0b9", 
                        uploadTime: 240,
                        dateTime: new Date()
                    },
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov",
                        status: "success",
                        hash: "9c9f0b9", 
                        uploadTime: 240,
                        dateTime: new Date()
                    },
                    {
                        number: "#4343", 
                        description: "add documentation for postgres scaler",
                        branch: "master",
                        author: "Philip Kirkorov",
                        status: "success",
                        hash: "9c9f0b9", 
                        uploadTime: 240,
                        dateTime: new Date()
                    },
                ]
            }
            setTimeout(() => res(repositoryData), 1000)
        }).then(res => {
            setData(res);
        });

        setDisabled(false);
        setRedirect(true);
    }

    return (
        <div className="settings">
            {redirect ? <Redirect to="/" /> : ""}
            <p className='title'>Settings</p>
            <p className="description">Configure repository connection and synchronization settings.</p>

            <div className="form">
                <form>
                    <label htmlFor="repositoryName">GitHub repository</label>
                    <input 
                        id="repositoryName" 
                        type="text" 
                        {...register('repositoryName', { required: true })}
                        placeholder="user-name/repo-name"
                        className={errors && errors.repositoryName?.type === 'required' ? "error" : ""}
                    />
                    <p className="error">{errors && errors.repositoryName?.type === 'required' && "Please, input name of repository"}</p>

                    <label htmlFor="command">Build command</label>
                    <input 
                        id="command" 
                        type="text"
                        defaultValue="npm ci && npm run build"
                        {...register('command', { required: true })}
                        className={errors && errors.command?.type === 'required' ? "error": ""}
                    />
                    <p className="error">{errors && errors.command?.type === 'required' && "Please, input command"}</p>
                    
                    <label htmlFor="branchName">Main branch</label>
                    <input 
                        id="branchName" 
                        type="text" 
                        defaultValue="master |"
                        {...register('branchName')}
                    />

                    <div className="synchronize">
                        <p htmlFor="synchronizeValue">Synchronize every</p>
                        <InputMask mask="99999999" maskChar="" id="synchronizeValue" defaultValue="10"/>
                        <p className="minutes">minutes</p>
                    </div>

                    <div className="buttons">
                        <button onClick={handleSubmit(onSubmit)} className="button-yellow" disabled={disabledButton}>Save</button>
                        <button onClick={() => setRedirect(true)} className="button-gray" disabled={disabledButton}>{!disabledButton ? <Link to="/">Cancel</Link>: "Cancel"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings;