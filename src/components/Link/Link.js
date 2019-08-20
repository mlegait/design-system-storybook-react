import PropTypes from 'prop-types';
import React from 'react';

/**
 * - Use text for links rather than graphics or icons.
 * - Links should be three words or less.
 * - Text should be consistent with the title of the intended destination.
 * - Use caution with links that are several words long. It is recommended that links are long enough to be understood by the user, but short enough to prevent text wrapping.
 * - Avoid the term “click here,” other links to “here,” or the web address itself. Instead, use a meaningful descriptive label for the link, and match the destination site name.
 */
const Link = ({ href, children }) => <a href={href}>{children}</a>;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
