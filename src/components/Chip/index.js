import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

function Chip({
  imageClass,
  src,
  text,
  textClass,
}) {
  return (
    <article className="chip">
      <img className={cn('chip__image', imageClass)} src={src} alt="avatar" />
      <h4 className={cn('chip__text', textClass)}>{text}</h4>
    </article>
  );
}

Chip.defaultProps = {
  imageClass: '',
  src: '',
  text: '',
  textClass: '',
};

Chip.propTypes = {
  imageClass: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  textClass: PropTypes.string,
};

export default Chip;
