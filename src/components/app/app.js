import React from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

import Footer from '../footer';
import Header from '../header';
import Settings from '../settings';

//import "./app.scss";

class App extends React.Component {
    render() {
        return (
            <div className="ci-server">
                <Header />
                <div className="main-content">
                    <Settings />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;