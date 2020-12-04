import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '../redux/actions/listActions';

class Home extends Component {
  render() {
    return (
      <div>home</div>
    );
  }
};

const mapStateToProps = state => ({
  list: state.listReducer.list
});

const mapDispatchToProps = {
  getList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);