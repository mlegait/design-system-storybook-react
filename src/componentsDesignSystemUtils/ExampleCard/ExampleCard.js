import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './ExampleCard.scss';

const ExampleCard = ({ isCorrect, text, caption }) => {
  const validIcon = (
    <svg
      className="exampleCard__icon exampleCard__icon--correct"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 1C6 1 1 6 1 12s5 11 11 11 11-4.9 11-11S18.1 1 12 1zm-1.6 15.3l-3.9-3.9 1.3-1.2 2.7 2.7 5.8-5.8 1.3 1.3-7.2 6.9z" />
      <path
        d="M10.4 16.3l-3.9-3.9 1.3-1.2 2.7 2.7 5.8-5.8 1.3 1.3-7.2 6.9z"
        data-icon-path="inner-path"
        opacity="0"
      />
    </svg>
  );

  const invalidIcon = (
    <svg
      className="exampleCard__icon exampleCard__icon--incorrect"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm2.7 10.5L8 8.8l-2.7 2.7-.8-.8L7.2 8 4.5 5.3l.8-.8L8 7.2l2.7-2.7.8.8L8.8 8l2.7 2.7-.8.8z" />
    </svg>
  );

  return (
    <div className="exampleCard">
      <div
        className={classNames('exampleCard__card', {
          'exampleCard__card--correct': isCorrect,
          'exampleCard__card--incorrect': !isCorrect,
        })}
      >
        {isCorrect ? validIcon : invalidIcon}
        <div className="exampleCard__text">{text}</div>
      </div>
      <div className="exampleCard__caption">{caption}</div>
    </div>
  );
};

ExampleCard.propTypes = {
  isCorrect: PropTypes.bool,
  text: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

ExampleCard.defaultProps = {
  isCorrect: false,
};

export default ExampleCard;
