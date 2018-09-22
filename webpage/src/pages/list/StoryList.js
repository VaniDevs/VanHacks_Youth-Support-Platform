/**
 */
import React, { Component } from 'react';
import PageTitle from '../../components/PageTitle'
import DatePicker from 'react-datepicker'
var DataTable = require('react-data-components').DataTable;
import { connect } from 'react-redux';
import {storyByDateResetDate, storyByDateSetDate, storyByDateUpdateLocalTop} from '../../actions/page/StoryByDate'
import {storyUpdateChosen, storyUpdateTop} from '../../actions/http/NetworkAction'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toggle-switch/dist/css/switch.min.css';
require('./StoryList.css');

import Switch from 'react-toggle-switch'


class StoryListPage extends Component {

    componentDidMount() {
        this.props.resetDate();

        var $ = window.$;
        var container$ = $('.container', this.refs.datatable);
        container$.removeClass('container');
    }

    render () {
        const today = moment();
        const _this = this;

        var datas = this.props.storyList.slice();
        datas.forEach(function (d) {
            d.studentName = d.studentRef.name;
        });
        const columns = [
            { title: '作者', prop: 'studentName' , className: 'story-author-name' },
            { title: '标题', prop: 'title', defaultContent:'无标题', className: 'story-title' },
            { title: '时长', render: (val, row)=> {
                if (row.duration === null || row.duration === undefined) {
                    return "";
                } else {
                    return parseInt(row.duration);
                }
            }, className: 'story-duration' },
            { title: '语音', render: (val, row)=> {
                return (
                    <a href={row.voices[0]} target="view_window">链接</a>
                );
            }, className:'story-voice'},
            { title: '精选', render: (val, row) => {
                return (
                    <Switch on={row.chosen} onClick={function () {
                        _this.props.updateChosen(row._id, !this.on);
                    }}/>
                );
            }, className:'story-chosen'},
            {
                title : "Top",
                render: (val, row) => {
                    if (row.top === null || row.top === undefined) {
                        row.top = "";
                    }

                    return (<input type="text" value={row.top} onChange={
                        function (e) {
                            var newValue = e.target.value;
                            var newValueInt = parseInt(newValue);
                            if (!isNaN(newValueInt)) {
                                newValue = parseInt(newValue);
                            } else {
                                newValue = "";
                            }
                            _this.props.updateLocalTop(row._id, newValue);
                        }
                    }></input> );
                },
                className: 'story-top'
            },
            {
                title : "保存",
                render: (val, row) => {
                    return (<button className="btn btn-primary" onClick={
                        function () {
                            _this.props.updateTop(row._id, row.top);
                        }
                    }>保存</button>)
                },
                className: 'story-save'
            }
        ];
        console.log(this.props.currentDate);
        return (
            <div className="story-list-page">
                <PageTitle title="故事列表"/>
                <div className="date-picker-container">
                    <DatePicker
                        selected={this.props.currentDate}
                        onChange={this.props.setDate}
                        locale="zh-cn"
                        maxDate={today}
                        placeholderText="选择日期"
                        className="date-picker"
                    />
                    <button className="btn-primary btn clear-date-btn" onClick={this.clearDate.bind(this)}>所有</button>
                </div>
                <div ref="datatable" className="story-table">
                    <DataTable
                        keys={[ '_id' ]}
                        columns={columns}
                        initialData={datas}
                        initialPageLength={20}
                        pageLengthOptions={[ 20, 50, 100]}
                    />
                </div>
            </div>
        )
    }

    clearDate() {
        this.props.setDate(null);
    }
}

function mapStateToProps({storyByDateCurrentDate, storyByDateList}) {
    return {currentDate : storyByDateCurrentDate, storyList : storyByDateList};
}

export default connect(mapStateToProps, {
    resetDate : storyByDateResetDate,
    setDate : storyByDateSetDate,
    updateChosen : storyUpdateChosen,
    updateTop : storyUpdateTop,
    updateLocalTop : storyByDateUpdateLocalTop

})(StoryListPage);