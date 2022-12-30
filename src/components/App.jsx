import React, {Component} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchPictures from '../services/finder-api';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from "./ImageGallery";
import Loader from './Loader';
import {LoadMoreButton} from './LoadMoreButton/LoadMoreButton.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {

    state={
      page: 1,
      query: '',
      images: [],
      status: Status.IDLE,
      error: null,
    }

async componentDidUpdate (_, prevState){

  const {page, query}= this.state;

if(prevState.page !== page || prevState.query !== query) {
  try {
        this.setState({status:Status.PENDING})
        const data= await fetchPictures(query, page)          
        const images = data.hits;       

        if(data.hits.length === 0) {
                  
          toast.warning("Sorry, there are no images matching your search query. Please try again.")
          this.setState({status: Status.REJECTED});
          return;
        }
   
    this.setState(prevState=> ({
      images: [...prevState.images, ...images],
      status:Status.RESOLVED}));      
        
   } catch (error) {
    this.setState({error, status: Status.REJECTED})
    toast.error("Something went wrong :( Try again.")
   }
}
}

getImages = (title)=> {

   this.setState({page:1, query: title, images: []})
}

loadMore = ()=> {
  const {page}= this.state;
  this.setState(prevState=> ({page: page+1,})) 
  }

  render() {
    const {images, status}= this.state;

    if (status===Status.IDLE) {
     return  <SearchBar onSubmit={this.getImages}/>
    }

    if(status===Status.PENDING) {
      return (
      <>
      <SearchBar onSubmit={this.getImages}/>
      <Loader/>
      </>
      )
      }    

    if(status===Status.REJECTED) {
      return (
      <>
        <SearchBar onSubmit={this.getImages}/>
        <ToastContainer autoClose={3000} theme="colored"/>
      </>
      )
    }

    if (status===Status.RESOLVED) {
     return <>
        <SearchBar onSubmit={this.getImages}/>
          <ImageGallery images = {images}/>
          <LoadMoreButton onClick = {this.loadMore}>Load More</LoadMoreButton>
          <ToastContainer autoClose={3000} theme="colored"/>
           </>
    
    }
  }
}





