import React from "react";
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./About";
import Logo from "./Logo";
import Home from "./Home";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <div>
                    <Router>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/logo" render={() => <Logo location='img/img_list.json' />}/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
