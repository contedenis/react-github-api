import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';

import './styles.scss';

function ChipData({
  imageClass,
  src,
  text,
  textClass,
  createdAt,
  updatedAt,
  followers,
  following,
  publicRepos,
  bio,
}) {
  return (
    <article className="chip-data">
      <div className="chip-data__data-container">
        <img className={cn('chip-data__image', imageClass)} src={src} alt="avatar" />
        <div className="chip-data__text-container">
          <h3 className={cn('chip-data__principal-text')}>
            {"Hi, I'm "}
            <span className="chip-data__principal-text--bold">{`${text} !`}</span>
          </h3>
          <h5 className={cn('chip-data__secondary-text', textClass)}>
            {bio}
          </h5>
        </div>
      </div>
      <div className="chip-data__line" />
      <div className="chip-data__subdata-container">
        <div className="chip-data__description-info-container">
          <div className="chip-data__description-info">
            <div className="chip-data__description-info__label">Followers</div>
            <h5 className="chip-data__description-info__data">{followers}</h5>
          </div>
          <div className="chip-data__description-info">
            <div className="chip-data__description-info__label">Following</div>
            <h5 className="chip-data__description-info__data">{following}</h5>
          </div>
          <div className="chip-data__description-info">
            <div className="chip-data__description-info__label">Created</div>
            <h5 className="chip-data__description-info__data">{` ${moment(createdAt).format('ddd, MMMM Do YYYY')}`}</h5>
          </div>
          <div className="chip-data__description-info">
            <div className="chip-data__description-info__label">Updated</div>
            <h5 className="chip-data__description-info__data">{` ${moment(updatedAt).format('ddd, MMMM Do YYYY')}`}</h5>
          </div>
          <div className="chip-data__description-info">
            <div className="chip-data__description-info__label">Public repos</div>
            <h5 className="chip-data__description-info__data">{publicRepos}</h5>
          </div>
        </div>
      </div>
    </article>
  );
}

ChipData.defaultProps = {
  imageClass: '',
  src: '',
  text: '',
  textClass: '',
  createdAt: '',
  updatedAt: '',
  followers: 0,
  following: 0,
  publicRepos: 0,
  bio: 'Empty bio',
};

ChipData.propTypes = {
  imageClass: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  textClass: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  publicRepos: PropTypes.number,
  bio: PropTypes.string,
};

export default ChipData;
