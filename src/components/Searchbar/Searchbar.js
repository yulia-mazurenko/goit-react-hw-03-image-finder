import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as SearchButtonIcon } from '../../icons/icon-search.svg';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.title.trim() === '') {
      toast.error('Please, enter image title');
      return;
    }

    onSubmit(values.title);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Searchbar>
      <Formik initialValues={{ title: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormButton type="submit" aria-label="search button">
            <SearchButtonIcon width="20" height="20" />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="title"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
      <ToastContainer autoClose={3000} theme="colored" />
    </Searchbar>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
