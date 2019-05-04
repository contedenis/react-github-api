import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function CardLink({ repo, image }) {
  return (
    <div className="card-link">
      <img className="card-link__image" src={image} alt="react saga" />
      <code>{repo.full_name}</code>
      <a href={repo.html_url}>More info ...</a>
    </div>
  );
}

CardLink.propTypes = {
  image: PropTypes.any.isRequired,
  repo: PropTypes.object.isRequired,
};

export default CardLink;
