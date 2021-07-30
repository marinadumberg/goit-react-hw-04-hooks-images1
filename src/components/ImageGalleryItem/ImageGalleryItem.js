import React from "react";
import s from "../ImageGalleryItem/ImageGalleryItem.module.css";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ webformatURL, tags, openModal }) {
  return (
    <li onClick={openModal} className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
