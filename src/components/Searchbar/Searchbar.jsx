import { SaerchInput, SearchBar, SearchButton, SearchButtonLabel, SearchForm } from "./Searchbar.styled";
import { Formik, Field } from "formik";
import PropTypes from 'prop-types';

export const Searchbar = ({onFormSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onFormSubmit(values.value.trim());
    console.log(values)
    resetForm();
  };

  return (
    <SearchBar>
      <Formik
        initialValues={{ value: '' }}
        onSubmit={handleSubmit}
      >
        <SearchForm>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>
          <Field
            as={SaerchInput}
            name="value"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchBar>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};