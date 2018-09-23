/**
 */

import React, { Component } from 'react';
import TopNavBar from '../components/TopNavBar'
import SideBar from '../components/SideBar'
import InfoPage from './info/InfoPage'
import SearchHomePage from './search/SearchHome'
import NewResourcePage from './staff/NewResource'
import ResourceDetailPage from './resource/ResourceDetail'



import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';

export default class HomePage extends Component {
    render () {
        return (
                <HashRouter>
                    <div>
                    <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
                        <TopNavBar/>
                        {/*<SideBar/>*/}
                    </nav>
                    <div style={{minHeight : "490px"}}>
                        <Switch>
                          <Route path="/resource/detail/:resourceId" component={ResourceDetailPage}/>
                          <Route path="/staff/newResource" component={NewResourcePage} />
                          <Route path="/home/search" component={SearchHomePage} />
                          <Route path="/" component={InfoPage} />
                        </Switch>
                    </div>
                        </div>
                </HashRouter>
        )
    }
}