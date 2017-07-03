import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import LinkButton from '../components/LinkButton';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.showStore = this.showStore.bind(this);
  }

  showStore() {
    console.log(this.props.state);
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <IndexLink to="/" className="linkButton" activeClassName="active-item">Home</IndexLink>
          {' '}
          <Link to="/users" className="linkButton" activeClassName="active-item">Users View</Link>
          {' '}
          <Link to="/todo" className="linkButton" activeClassName="active-item">TODO</Link>
          {' '}
          <Link to="/misc" className="linkButton" activeClassName="active-item">Misc View</Link>
          {' '}
          <div style={{ float: 'right' }}>
            <LinkButton onClick={this.showStore}>Show Store</LinkButton>
            {' '}
          </div>
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  state: PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

export default connect(
  mapStateToProps
)(App);
