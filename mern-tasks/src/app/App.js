import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="teal darken-2">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Coffe.com</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                            <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                            <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" placeholder="Titulo tarea"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7"></div>

                    </div>
                </div>
            </div>
        )

    }
}

export default App;