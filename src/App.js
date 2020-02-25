import React, {Component} from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search/Search";

class App extends Component {
    render() {
        return (

            <MuiThemeProvider>
                <div>
                    <NavBar/>
                    <div className="container">
                        <Search/>
                    </div>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default App;
