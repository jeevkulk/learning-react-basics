import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            user: props.user,
            homeLink: props.initialHomeLinkName
        };
    }

    onAddNewProject() {
        this.state.user.past_projects[this.state.user.past_projects.length] = this.state.user.current_project;
        this.state.user.current_project = this.state.user.current_project + "_new";
        this.setState(
            {
                user: this.state.user
            }
        );
    }

    onChangeLinkText() {
        this.props.changeLinkText(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState(
            {
                homeLink: event.target.value
            }
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h4>Name:</h4>{ this.props.name }
                        <h4>Current Project:</h4>{ this.state.user.current_project }
                        <h4>Past Projects:</h4>
                        <ul>
                            {this.props.user.past_projects.map((past_project, i) => <li key={i}>{past_project}</li>)}
                        </ul>
                        <hr/>
                        <button onClick={() => this.onAddNewProject()} className="btn btn-primary">Add New Project</button>
                        <hr/>
                        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={this.onChangeLinkText.bind(this)} className="btn btn-primary">Change Link Text</button>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    current_project: PropTypes.string,
    user: PropTypes.object,
    showNumberOfProjects: PropTypes.func
}

