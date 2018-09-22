/**
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
    render () {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>

                        <li>
                            <a data-toggle="collapse" data-target="#activity-management-sub">
                                来源管理<span className="fa arrow"></span>
                            </a>
                            <ul id="activity-management-sub" className="nav nav-second-level collapse">
                                <li>
                                    <Link to="/ticket/list">来源列表</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a data-toggle="collapse" data-target="#config-management-sub">
                                配置<span className="fa arrow"></span>
                            </a>
                            <ul id="config-management-sub" className="nav nav-second-level collapse">
                                <li>
                                    <Link to="/config/oomate">配置</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a data-toggle="collapse" data-target="#list-management-sub">
                                列表<span className="fa arrow"></span>
                            </a>
                            <ul id="list-management-sub" className="nav nav-second-level collapse">
                                <li>
                                    <Link to="/list/story">故事列表</Link>
                                </li>
                                <li>
                                    <Link to="/list/student">学生列表</Link>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}