import React, { Component } from 'react';

export default class LifeCycleClassChild extends Component {
  // mount
  componentDidMount() {
    console.log('컴포넌트 마운트!!');
  }
  componentDidUpdate() {
    console.log('컴포넌트 업데이트!!');
  }
  componentWillUnmount() {
    console.log('컴포넌트 삭제!!');
  }
  render() {
    const { number } = this.props;
    return <div>현재 number값은 {number}입니다!</div>;
  }
}
