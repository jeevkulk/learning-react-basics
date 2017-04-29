import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

    render() {
        var user = {
            name: "J",
            employed_with: "JPMorgan",
            past_employed_with: ["COSL/OrbiTech/Polaris", "Capgemini", "LB/Nomura"]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"J"} user={ user }>
                            <p>Something about yourself?</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));