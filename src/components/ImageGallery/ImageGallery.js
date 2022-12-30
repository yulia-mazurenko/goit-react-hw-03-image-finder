import ImageGalleryItem from '../ImageGalleryItem';
import {ImageGalleryList} from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;
