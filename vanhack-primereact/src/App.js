import React, {Component} from 'react';
import {Button} from 'primereact/button';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SearchHomePage from './pages/search/SearchHome'
import ResourceDetailPage from './pages/resource/ResourceDetail'
import NewResourcePage from './pages/staff/NewResource'
import LoginPage from './pages/user/login'
import RegisterPage from './pages/user/register'
import Navigationitems from './components/NavigationItems'


import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';


class App extends Component {

  constructor() {
    super();
    this.state = {
      loginedUser: null
    };
  }

  render() {
    return (
        <HashRouter>
          <div className="App">

            <div>
              App Header -- Add App Header Here
              <span>
                <Navigationitems
                    user={this.state.loginedUser}
                />
              </span>
            </div>


            {/*<div className="App-header">*/}
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            {/*<h2>Welcome to PrimeReact</h2>*/}
            {/*</div>*/}
            {/*<div className="App-intro">*/}
            {/*<Button label="Click" icon="pi pi-check" onClick={this.increment} />*/}
            {/**/}
            {/*<p>Number of Clicks: {this.state.count}</p>*/}
            {/*</div>*/}


            <Switch>
              <Route path="/resource/detail/:resourceId" component={ResourceDetailPage}/>
              <Route path="/staff/newResource" component={NewResourcePage}/>
              <Route path="/user/login" component={LoginPage}/>
              <Route path="/user/register" component={RegisterPage}/>
              <Route path="/" component={SearchHomePage}/>
            </Switch>

          </div>
        </HashRouter>
    );
  }
}

export default App;
