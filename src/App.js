import React, { Component } from 'react'
import Sidebar from "./Sidebar/Sidebar";
import HorizontalMenu from "./Horizontal/HorizontalMenu";
import Horizontal from "./Horizontal/Horizontal";

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Sample from "./Sample";
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     
         <div className="App">
         <HashRouter>
           <Route exact path="/" component={Sample}/>
           <header><Horizontal/></header>
         {/* <Sidebar {...this.props}/> */}
         </HashRouter>
     
    </div>
      
    )
  }
}
