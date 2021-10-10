import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink, Link } from 'react-router-dom';

import Footer from '../footer';
import Header from '../header';
import Settings from '../settings';
import EmptySettings from '../empty-settings/empty-settings';
import CommitsList from '../commits-list';

import "./app.scss";
import AddForm from '../add-form';

const MainContent = (props) => {
    return (
        <>
            {props.header}
            <div className={!props.isCentered ? "main-content" : "main-content centered"}>
                {props.children}
            </div>
        </>
    )
}

const App = () => {
    const [repositoryData, setRepositoryData] = useState(() => null);
    const [isPopupActive, setPopupActive] = useState(false);
    
    useEffect(() => {
        if(repositoryData) {
            localStorage.repositoryData = JSON.stringify(repositoryData);
        }
    }, [repositoryData]);

    useEffect(() => {
        if(localStorage.repositoryData) {
            const data = JSON.parse(localStorage.repositoryData);
            setRepositoryData(data);
        }
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {repositoryData && repositoryData.name ?  
                            <>
                                <MainContent
                                    header={
                                        <Header 
                                            text={repositoryData.name} 
                                            kind="main" 
                                            settingsButton={
                                                <div className="building-buttons">
                                                    <button onClick={() => setPopupActive(true)}><div className="startup-img"></div><p>Run build</p></button>
                                                    <button><Link to="/settings"><div className="settings-img"></div></Link></button>
                                                </div>
                                            }
                                        />
                                    }
                                    isCentered={false}>
                                        <CommitsList commits={repositoryData.commits}/>
                                </MainContent>
                                <AddForm isActive={isPopupActive} setActive={setPopupActive}/>
                            </>: 
                            <MainContent
                                header={<Header text="School CI Server" settingsButton={<button><div className="settings-img"></div>Settings</button>}/>}
                                isCentered={true}>
                                <EmptySettings />
                            </MainContent> 
                    } 
                </Route>
                <Route path="/settings">
                    <MainContent 
                        header={<Header text="School CI Server" />} 
                        isCentered={false}>
                            <Settings setData={setRepositoryData}/>
                    </MainContent>   
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;