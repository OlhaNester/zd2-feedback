import React from 'react';
import styles from './ImageGalleryItem.module.css';

//import PropTypes from 'prop-types';

const ImageGalleryItem = ({images}) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img id={ id} src={webformatURL} alt={tag} className={styles.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;