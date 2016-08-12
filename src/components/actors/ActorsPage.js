import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/movieActions';

class ActorsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            newActor: {
                name: ''
            }
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onAddNew = this.onAddNew.bind(this);
    }

    onNameChange(event) {
        const val = event.target.value;
        const newActor = this.state.newActor;
        newActor.name = val;
        this.setState({ newActor });
    }

    onAddNew(event) {
        debugger;
        this.props.addActor(this.state.newActor);
        this.setState({ newActor: { name: '' } });
    }

    render() {
        const createActorRow = (actor) => {
            return (
                <tr key={actor.id}>
                    <td>{actor.name}</td>
                </tr>
            );
        };

        return (
            <div>
                <h2>Actors</h2>
                <table className="table table-stripped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.actors.map(createActorRow)}
                        <tr>
                            <td>
                                <form className="form-inline">
                                    <div className="form-group">
                                        <input type="text"
                                            value={this.state.newActor.name}
                                            onChange={this.onNameChange}
                                            className="form-control" />
                                    </div>
                                    <input type="button"
                                        value="Add"
                                        onClick={this.onAddNew}
                                        className="btn btn-default"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ActorsPage.propTypes = {
    addActor: PropTypes.func.isRequired,
    actors: PropTypes.array.isRequired,
    //actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        actors: state.actors
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
    // return {
    //     addActor: actor => dispatch(actions.addActor(actor))
    // };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActorsPage);