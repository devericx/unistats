import React, { Component } from 'react';

class StatList extends Component {
  constructor(props) {
    super(props);
  }

  createList() {
    const list = [];

    for (let i = 0; i < this.props.list.length; i++) {
      list.push(<p className="f4 mb-med" key={i}>
        {this.props.list[i]}
                </p>);
    }

    return list;
  }

  render() {
    return (
      <div className="stat">
        <h3 className="f4 grey mb-small">{this.props.header}</h3>
        {this.createList()}
      </div>
    );
  }
}

export default StatList;
