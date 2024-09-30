import style from "./SearchBar.module.css";

import { Field, Form, Formik } from "formik";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={style.searchBar}>
          <Field
            name="query"
            placeholder="Search images and photos"
            className={style.input}
          />
          <button type="submit" className={style.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
