import React from 'react';
import PropTypes from 'prop-types';


const LazyImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      decoding="async"
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

LazyImage.defaultProps = {
  alt: '',
  className: '',
};

export default LazyImage;
