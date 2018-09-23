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
import axios from 'axios'
import dotProp from 'dot-prop'

import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';

axios.defaults.withCredentials = true;

class App extends Component {

  constructor() {
    super();
    this.state = {
      loginedUser: null
    };
  }
  componentDidMount() {
    this.loadLogineduser();
  }

  onUserLogin(u) {
    this.setState({loginedUser: u});
  }
  async loadLogineduser() {
    const a = await axios.get(`${window.SERVER_ROOT_URL}/biz/user/get`);
    // TODO handle error and zero result
    const u = dotProp.get(a, 'data.user');
    this.setState({
      loginedUser: u,
    });
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
                    onClickLogout={()=>{this.onUserLogin()}}
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
              <Route path="/user/login" component={()=>{return <LoginPage onLogin={this.onUserLogin.bind(this)}/>}}/>
              <Route path="/user/register" component={()=>{return <RegisterPage onRegister={this.onUserLogin.bind(this)}/>}}/>
              <Route path="/" component={SearchHomePage}/>
            </Switch>

          </div>
        </HashRouter>
    );
  }
}

export default App;
