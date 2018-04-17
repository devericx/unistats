import React, { Component } from 'react';

import Stat from './Stat';
import StatList from './StatList';
import StatTable from './StatTable';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div className="profile">
        <h3 className="f2">{this.props.header}</h3>
        <Stat header="Major" body={this.props.major} />
        <StatTable
          class={this.props.class}
          ugpa={this.props.ugpa}
          wgpa={this.props.wgpa}
          nsat={this.props.nsat}
          osat={this.props.osat}
          act={this.props.act}
        />
        <Stat header="APs" body={this.props.ap} />
        <Stat header="SAT IIs" body={this.props.sat2} />
        {this.state.expanded ? (
          <div className="extended">
            <Stat header="Senior Year Courseload" body={this.props.courseload} />
            <StatList header="Extracurriculars" list={this.props.ec} />
            <StatList header="Awards" list={this.props.awards} />
            <Stat header="Essays" body={this.props.essays} />
            <Stat header="Teacher Recommendations" body={this.props.recs} />
            <Stat header="Interviews" body={this.props.interviews} />
            <Stat header="Hooks" body={this.props.hooks} />
            <Stat header="Final Thoughts" body={this.props.other} />
            <Stat header="Special Circumstances" body={this.props.special} />
            <h3 className="toggle f4 grey ma0" onClick={() => this.toggle()}>
              See Less
            </h3>
          </div>
        ) : (
          <h3 className="toggle f4 grey ma0" onClick={() => this.toggle()}>
            See More
          </h3>
        )}
      </div>
    );
  }
}

export default Profile;
