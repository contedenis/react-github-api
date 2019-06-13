import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import cn from 'classnames';

import Spinner from '../Spinner';
import searchUser from '../../assets/images/searchUser.jpg';
import emptyBox from '../../assets/images/emptyBox.svg';

import './styles.scss';
import { params } from './constants';
import { selectUsersList, selectFetchingList, selectUserDetails } from './selectors';
import * as actions from './actions';

import Chip from '../Chip';
import ChipData from '../ChipData';
import InputSearch from '../InputSearch';

function SearchUsers({
  clearUserDetails,
  clearUsersList,
  fetchingList,
  getUserDetails,
  getUsersByName,
  router,
  user,
  userDetails,
  usersList,
}) {
  const [userName, setUserName] = useState('');
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userData, setUserData] = useState(!!user);

  function handleMount() {
    const paramsWithName = {
      q: `${userName}`,
      ...params,
    };
    if (userName && userName.length > 3) {
      setShowUserDetails(false);
      setUserData(false);
      getUsersByName({ params: paramsWithName });
    }
  }

  function getUser() {
    if (user) {
      getUserDetails({ user });
    }
  }

  useEffect(handleMount, [userName]);
  useEffect(getUser, [user]);

  function onAnimationEnd() {
    setShowUserDetails(true);
    setUserData(false);
  }

  function handleOnClick() {
    router.push('/search-users');
    clearUserDetails();
    clearUsersList();
    setShowUserDetails(false);
    setUserName('');
  }

  const isEmpty = !showUserDetails && usersList.length === 0 && !fetchingList;

  return (
    <main className="search-users">
      <img className="search-users__image" src={searchUser} alt="search users" />
      <section className="search-users__container">
        <article className="search-users__input">
          <InputSearch
            className="search-users__input-search"
            disabled={!userName}
            onChange={setUserName}
            onClick={handleOnClick}
            placeholder="Look for a user"
            value={userName}
          />
        </article>
        <section
          className="search-users__users-container"
          onAnimationEnd={() => onAnimationEnd()}
        >
          {fetchingList
            ? (
              <Spinner className="search-users__spinner" />
            ) : (
              !showUserDetails && usersList && (
                usersList.map((item, key) => (
                  <Link
                    className={cn('search-users__user', { 'search-users__user--right': user && userData })}
                    key={key}
                    onClick={() => setUserData(true)}
                    to={`/search-users/${item.login}`}
                  >
                    <Chip
                      imageClass="search-users__user-image"
                      src={item.avatar_url}
                      text={item.login}
                      textClass="search-users__user-name"
                    />
                  </Link>
                ))
              )
            )}
          {showUserDetails && (
            <ChipData
              bio={userDetails.bio}
              createdAt={userDetails.created_at}
              followers={userDetails.followers}
              following={userDetails.following}
              publicRepos={userDetails.public_repos}
              src={userDetails.avatar_url}
              text={userDetails.name}
              updatedAt={userDetails.updated_at}
            />
          )}
          {isEmpty && (
            <div className="search-users__empty-state">
              <div className="search-users__empty-state-content">
                <img src={emptyBox} alt="empty state" />
                <p className="search-users__empty-state-text">Oops, it seems that you have not searched forusers yet! Try doing it!</p>
              </div>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

SearchUsers.defaultProps = {
  user: undefined,
  userDetails: {},
  usersList: [],
};

SearchUsers.propTypes = {
  clearUserDetails: PropTypes.func.isRequired,
  clearUsersList: PropTypes.func.isRequired,
  fetchingList: PropTypes.bool.isRequired,
  getUserDetails: PropTypes.func.isRequired,
  getUsersByName: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  user: PropTypes.string,
  userDetails: PropTypes.object,
  usersList: PropTypes.array,
};

const mapStateToProps = state => ({
  fetchingList: selectFetchingList(state),
  usersList: selectUsersList(state),
  userDetails: selectUserDetails(state),
});

export default connect(mapStateToProps, actions)(withRouter(SearchUsers));
