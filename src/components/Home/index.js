import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import exploringGitHub from '../../assets/images/exploringGitHub.png';
import reactLogo from '../../assets/images/react-logo.png';
import reactReduxLogo from '../../assets/images/redux-logo.png';
import reduxSagaLogo from '../../assets/images/redux-saga-logo.png';
import Spinner from '../Spinner';

import './styles.scss';
import {
  selectFetching,
  selectReact,
  selectRedux,
  selectReduxSaga,
} from './selectors';
import * as actions from './actions';
import CardLink from './CardLink';

function Home({
  fetching,
  getRepository,
  react,
  redux,
  reduxSaga,
}) {
  function handleMount() {
    getRepository({ repoName: 'facebook', repo: 'react' });
    getRepository({ repoName: 'reduxjs', repo: 'redux' });
    getRepository({ repoName: 'redux-saga', repo: 'redux-saga' });
  }

  useEffect(handleMount, []);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__container-promo">
          <img className="dashboard__card" src={exploringGitHub} alt="git" />
          <div className="dashboard__card-text">
            <h1 className="dashboard__card-text-title">Hello, people</h1>
            <div className="dashboard__card-text-subtitle">
              {`This is a simple application to search for relevant information within github.
              I hope you enjoy it!`}
            </div>
          </div>
        </div>
        <div className="dashboard__container-link">
          {fetching
            ? (
              <Spinner className="dashboard__container-spinner" />
            ) : (
              <Fragment>
                {react && <CardLink repo={react} image={reactLogo} />}
                {redux && <CardLink repo={redux} image={reactReduxLogo} />}
                {reduxSaga && <CardLink repo={reduxSaga} image={reduxSagaLogo} />}
              </Fragment>
            )}
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  fetching: false,
  react: {},
  redux: {},
  reduxSaga: {},
};

Home.propTypes = {
  fetching: PropTypes.bool,
  getRepository: PropTypes.func.isRequired,
  react: PropTypes.object,
  redux: PropTypes.object,
  reduxSaga: PropTypes.object,
};

const mapStateToProps = state => ({
  fetching: selectFetching(state),
  react: selectReact(state),
  redux: selectRedux(state),
  reduxSaga: selectReduxSaga(state),
});

export default connect(mapStateToProps, actions)(Home);
