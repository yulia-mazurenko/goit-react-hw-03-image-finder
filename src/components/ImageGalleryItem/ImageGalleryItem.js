import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openmodal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;

    return (
      <>
        <GalleryItem onClick={this.openmodal}>
          <GalleryImage
            src={image.webformatURL}
            alt={image.ImageGalleryItemtags}
          />
        </GalleryItem>
        {isModalOpen && (
          <Modal image={this.props.image} onCloseModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
