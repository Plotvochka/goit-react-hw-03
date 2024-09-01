import { nanoid } from "nanoid";
import { useId } from "react";
import PropTypes from "prop-types";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const phoneBookCheck = Yup.object().shape({
  name: Yup.string()
    .min(2, "To Short")
    .max(50, "To Long!")
    .required("Required"),
  number: Yup.string()
    .min(6, "To Short")
    .max(12, "To Long!")
    .required("Required"),
});

export default function ContactForm({ updateContactList }) {
  const idLabel = useId();

  const handleSubmitForm = (values, actions) => {
    const id = nanoid();

    updateContactList({
      id,
      name: values.name,
      number: values.number,
    });

    actions.resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmitForm}
      initialValues={initialValues}
      validationSchema={phoneBookCheck}
    >
      <Form autoComplete="off">
        <h1>Contact Form</h1>
        <div className={css.wrap}>
          <Field
            className={css.formField}
            type="text"
            name="name"
            id={`${idLabel}-'name'`}
            placeholder=" "
          />
          <label htmlFor={`${idLabel}-'name'`}>Name</label>
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.wrap}>
          <Field
            className={css.formField}
            type="string"
            name="number"
            id={`${idLabel}-'number'`}
            placeholder=" "
          />
          <label htmlFor={`${idLabel}-'number'`}>Number</label>
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  updateContactList: PropTypes.func.isRequired,
};
