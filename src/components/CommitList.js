import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCommits } from "actions/commits";

class CommitList extends Component {
  constructor(props) {
    super(props);
    props.dispatch(fetchCommits());
  }
  render() {
    return (
      <div>
        <h1>List of commits</h1>
        <ul>
          {this.props.commits.map((commit, index) => {
            return <li key={index}>{commit.commit.message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

CommitList.propTypes = {
  dispatch: PropTypes.func,
  commits: PropTypes.array
};

function mapStateToProps({ commit }) {
  return { commits: commit.commits };
}

export default connect(mapStateToProps)(CommitList);
