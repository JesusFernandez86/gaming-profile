import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import trialView from "./components/trialView";



interface IGlobalStateProps {
 
}

interface IGlobalActionProps {
}

type TProps = IGlobalStateProps & IGlobalActionProps;

class App extends React.PureComponent<TProps> {

  render() {
    return <>
      <BrowserRouter>
        <Route path='/' exact component={trialView} />      
      </BrowserRouter>
    </>;
  }
}




export default App;