import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

export default function ContactForm() {
  const phoneRegExp = /^\d{10}$/;
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    number: Yup.string()
      .matches(phoneRegExp, "Phone number must be 10 digits")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field type="text" id="number" name="number" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
