import React, {Component} from 'react';
import Modal from "../Modal";
import {GalleryItem, GalleryImage} from './ImageGalleryItem.styled';

// const {image}= this.props;

class ImageGalleryItem extends Component {

    state={
        isModalOpen: false,
        }

        openmodal = ()=> {
            this.setState({isModalOpen: true})
        }

        closeModal= ()=> {
            this.setState({isModalOpen: false})
        }
     
    render() {
        
        const {isModalOpen}= this.state;

        return (       
            <>
            <GalleryItem onClick = {this.openmodal}>
            <GalleryImage src={this.props.image.webformatURL} alt={this.props.image.ImageGalleryItemtags} />
            </GalleryItem>  
            {isModalOpen && <Modal image={this.props.image} onCloseModal={this.closeModal}/>}  
            </>            
        )
    }
}

export default ImageGalleryItem;