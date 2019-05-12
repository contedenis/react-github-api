import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../Spinner';
import repositoriesByLanguage from '../../assets/images/languages.jpg';

import './styles.scss';
import { params, inputOptions } from './constants';
import { selectRepositoriesByLanguage, selectFetching } from './selectors';
import * as actions from './actions';

import RepoItem from '../RepoItem';
import InputSelect from '../InputSelect';

function SearchByLanguage({ fetching, getRepositoriesByLanguage, repositories }) {
  const [repoName, setRepoName] = useState(null);
  function handleMount() {
    const paramsWithName = {
      q: `language: ${repoName}`,
      ...params,
    };
    getRepositoriesByLanguage({ params: paramsWithName });
  }

  useEffect(handleMount, [repoName]);
  return (
    <div className="repositories-by-language">
      <img className="repositories-by-language__image" src={repositoriesByLanguage} alt="repositories by language" />
      <div className="repositories-by-language__select">
        <InputSelect
          onChange={setRepoName}
          options={inputOptions}
          placeholder="Select a language"
          value={repoName}
        />
      </div>
      {fetching
        ? (
          <Spinner className="repositories-by-language__spinner" />
        ) : (
          repositories && repositories.map((repo, key) => (
            <RepoItem repo={repo} key={key} />
          ))
        )}
    </div>
  );
}

SearchByLanguage.defaultProps = {
  repositories: [],
};

SearchByLanguage.propTypes = {
  fetching: PropTypes.bool.isRequired,
  getRepositoriesByLanguage: PropTypes.func.isRequired,
  repositories: PropTypes.array,
};

const mapStateToProps = state => ({
  fetching: selectFetching(state),
  repositories: selectRepositoriesByLanguage(state),
});

export default connect(mapStateToProps, actions)(SearchByLanguage);
