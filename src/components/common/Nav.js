import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/about" activeClassName="active">About <span className="sr-only">(current) </span></Link></li>
                        <li><Link to="/actors" activeClassName="active">Actors</Link></li>
                        <li><Link to="/movies" activeClassName="active">Movies</Link></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="#">Separated link</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
        </nav>
    );
};