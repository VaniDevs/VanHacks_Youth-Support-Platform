/**
 */
import React, { Component } from 'react';
import PageTitle from '../../components/PageTitle'
var DataTable = require('react-data-components').DataTable;
import { connect } from 'react-redux';
import {studentQueryAll, groupQueryAll} from '../../actions/http/NetworkAction'
import {studentListChangeGroup, STUDENT_LIST_GROUP_ALL} from '../../actions/page/StudentList'
require('./StudentList.css');
import moment from 'moment'


class StudentList extends Component {

    componentDidMount() {
        this.props.studentQueryAll();
        this.props.groupQueryAll();
        this.props.changeGroup(STUDENT_LIST_GROUP_ALL);

        var $ = window.$;
        var container$ = $('.container', this.refs.datatable);
        container$.removeClass('container');
    }

    selectedGroupChanged(event) {
        this.props.changeGroup(event.target.value);
    }

    render () {

        var groupOptions = this.props.allGroupList.map(function (group) {
            return <option value={group._id} key={group._id}>{group.name}</option>
        });
        groupOptions.unshift(
            <option value="all" key='all'>所有学生</option>
        );

        //_id 姓名 手机号 注册时间
        var datas = [];
        if (this.props.currentStudentGroup == STUDENT_LIST_GROUP_ALL) {
            datas = this.props.allStudentList.slice();
        } else {
            datas = this.props.groupStudentList.slice();
        }


        datas.forEach(function (d) {
            var createAtDate = moment(d.createdAt);
            var dateStr = createAtDate.format('YYYY-MM-DD');
            d.createAtDesc = dateStr;
        });



        const columns = [
            {title : 'id', prop: '_id', className: 'studentId'},
            {title : '姓名', prop: 'name'},
            {title : '手机号', prop: 'mobile'},
            {title : '注册时间', prop: 'createAtDesc'}
        ];

        return (
            <div className="student-list-page">
                <PageTitle title="学生列表"/>

                <div className="student-group-select-container">
                    <select value={this.props.currentStudentGroup} onChange={this.selectedGroupChanged.bind(this)}>
                        {groupOptions}
                    </select>
                </div>
                <div ref="datatable" className="student-table">
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
}


function mapStateToProps({allStudentList, allGroupList, currentStudentGroup, groupStudentList}) {
    return {allStudentList, allGroupList, currentStudentGroup, groupStudentList};
}

export default connect(mapStateToProps, {
    studentQueryAll : studentQueryAll,
    groupQueryAll : groupQueryAll,
    changeGroup : studentListChangeGroup
})(StudentList);