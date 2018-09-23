import React, {Component} from 'react';
import {Button} from 'primereact/button';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SearchHomePage from './pages/search/SearchHome'
import ProgramDetailPage from './pages/resource/ProgramDetail'
import AddProgramPage from './pages/organization/AddProgram'
import MyProgramPage from './pages/organization/MyProgram'
import MyApplicationPage from './pages/user/MyApplication'
import LoginPage from './pages/user/login'
import RegisterPage from './pages/user/register'
import AppHeader from './components/AppHeader'
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
            <AppHeader
                user={this.state.loginedUser}
                onClickLogout={() => {
                  this.onUserLogin()
                }}
            />
            <div className="main-container">
              <Switch>
                <Route path="/program/detail/:resourceId" component={
                  (props) => {
                    const programId = props.match.params.resourceId;
                    return (<ProgramDetailPage programId={programId} user={this.state.loginedUser}/>);
                  }
                }/>
                <Route path="/organization/add_program" component={AddProgramPage}/>
                <Route path="/organization/my_program" component={
                  () => {
                    return <MyProgramPage user={this.state.loginedUser}/>
                  }
                }/>
                <Route path="/user/login" component={() => {
                  return <LoginPage onLogin={this.onUserLogin.bind(this)}/>
                }}/>
                <Route path="/user/register" component={() => {
                  return <RegisterPage onRegister={this.onUserLogin.bind(this)}/>
                }}/>
                <Route path="/user/my_application" component={
                  () => {
                    return <MyApplicationPage user={this.state.loginedUser}/>
                  }
                }/>
                <Route path="/" component={SearchHomePage}/>
              </Switch>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default App;
