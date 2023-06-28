import { SaerchInput, SearchBar, SearchButton, SearchButtonLabel, SearchForm } from "./Searchbar.styled";
import { Formik, Field } from "formik";

export const Searchbar = () => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
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
