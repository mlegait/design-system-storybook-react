import PropTypes from 'prop-types';
import React from 'react';
import { externalLinkIcon, gitHubIcon, sketchIcon } from './icons';
import './ResourceCard.scss';
import {
  RESOURCE_TYPES,
  RESOURCE_TYPE_GITHUB,
  RESOURCE_TYPE_SKETCH,
} from './ResourceTypes';

const iconsPerType = {
  [RESOURCE_TYPE_GITHUB]: gitHubIcon,
  [RESOURCE_TYPE_SKETCH]: sketchIcon,
};

const getIcon = type => iconsPerType[type];

const ResourceCard = ({ title, type, url }) => (
  <a
    className="resourceCard"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="resourceCard__title">{title}</span>
    <span className="resourceCard__icons">
      {getIcon(type)}
      {externalLinkIcon}
    </span>
  </a>
);

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(RESOURCE_TYPES).isRequired,
  url: PropTypes.string.isRequired,
};

export default ResourceCard;
