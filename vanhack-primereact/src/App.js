import React, { Component } from 'react';
import {Button} from 'primereact/button';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SearchHomePage from './pages/search/SearchHome'

import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';


class App extends Component {
    
    constructor() {
        super();
        this.state = {};
        // this.state = {count: 0};
        // this.increment = this.increment.bind(this);
    }
    
    // increment() {
    //     this.setState({count: this.state.count + 1});
    // }
    
    render() {
        return (
          <div className="App">
            {/*<div className="App-header">*/}
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              {/*<h2>Welcome to PrimeReact</h2>*/}
            {/*</div>*/}
            {/*<div className="App-intro">*/}
              {/*<Button label="Click" icon="pi pi-check" onClick={this.increment} />*/}
              {/**/}
              {/*<p>Number of Clicks: {this.state.count}</p>*/}
            {/*</div>*/}

            <HashRouter>
              <Switch>
                {/*<Route path="/resource/detail/:resourceId" component={ResourceDetailPage}/>*/}
                {/*<Route path="/staff/newResource" component={NewResourcePage} />*/}
                {/*<Route path="/home/search" component={SearchHomePage} />*/}
                <Route path="/" component={SearchHomePage} />
              </Switch>
            </HashRouter>


          </div>
        );
    }
}

export default App;
