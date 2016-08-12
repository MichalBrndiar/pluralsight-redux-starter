import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createMovie } from '../../actions/movieActions';
import Movie from '../../models/movie';

class MoviesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { movies: [], movie: { title: '' } };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }

    movieRow(movie, index) {
        return (
            <div key={index}>{movie.title}</div>
        );
    }

    onTitleChange(event) {
        let title = event.target.value;
        let movie = this.state.movie;
        movie.title = title;
        this.setState({ movie });
    }

    addMovie() {
        //this.state.movies.push(this.state.movie);
        //this.state.movie = { title: '' };
        //this.setState(this.state);
        this.props.dispatch(createMovie(new Movie(this.state.movie.title)));
        this.setState({ movie: new Movie() });
    }

    render() {
        return (
            <div>
                <h2>Movies</h2>
                {this.props.movies.map(this.movieRow)}
                <h2>Add Movie</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.movie.title} />
                <button onClick={this.addMovie}>Add Movie</button>
            </div>
        );
    }
}

MoviesPage.propTypes = {
    movies: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps)(MoviesPage);