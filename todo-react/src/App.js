import React, { Component } from 'react';
import Header from "./components/Header/Header";
import './App.css';
import ToDoCard from './components/TodoCard/TodoCard';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography 
            component="div" 
            className="generalContainer" 
            style={{backgroundColor: "#cfe8fc", height: "100vh"}}>
              <ToDoCard />
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
