import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            initialHomeLinkName: "Home"
        };
    }

    onChangeLinkText(newHomeLinkName) {
        this.setState(
            {
                initialHomeLinkName: newHomeLinkName
            }
        );
    }

    render() {
        var user = {
            name: "J",
            current_project: "Technical Compliance",
            past_projects: ["Corebanking", "Training Application", "Financial Compliance"]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={ this.state.initialHomeLinkName }/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"J"} user={ user } changeLinkText={this.onChangeLinkText.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));