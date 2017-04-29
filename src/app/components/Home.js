import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h4>Name:</h4>{ this.props.name }
                        <h4>Company:</h4>{ this.props.user.employed_with }
                        <h4>Companies worked for in the past:</h4>
                        <ul>
                            {this.props.user.past_employed_with.map((past_employer, i) => <li key={i}>{past_employer}</li>)}
                        </ul>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    employed_with: PropTypes.string,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}

