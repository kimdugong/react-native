import _ from 'lodash'
import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employee) {
    return <ListItem employee = { employee } />
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={ this.dataSource }
        renderRow= { this.renderRow }
      />
    )
  }
}

const mapStateToProps = state => {
  // lodash 사용해서쉽게 Object안의 Object를 plainObject로 변환
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid } // { shift: 'Monday', name: 'S', id: 'ladijfoaidjf' }형식으로 Array반
  });

  return { employees }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)