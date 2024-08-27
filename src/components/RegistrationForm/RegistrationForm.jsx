import { ErrorMessage, Field, Form, Formik } from "formik";
import { registerThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import s from "./RegistrationForm.module.css";
import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Name is required"),
  email: Yup.string().trim().email().required("Email is required"),
  password: Yup.string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", email: "", password: "" };

  const handelSubmit = (values, actions) => {
    dispatch(registerThunk(values));

    actions.resetForm();
  };

  return (
    <div>
      <div className={s.form}>
        <Formik
          initialValues={initialValues}
          onSubmit={handelSubmit}
          validationSchema={registrationSchema}
        >
          <Form>
            <label className={s.label}>
              Name
              <Field type="text" name="name" placeholder="name" />
              <ErrorMessage name="name" component="span" />
            </label>
            <label className={s.label}>
              Email
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="span" />
            </label>
            <label className={s.label}>
              Password
              <Field
                type="password"
                name="password"
                autoComplete="true"
                suggested="current-password"
                placeholder="password"
              />
              <ErrorMessage name="password" component="span" />
            </label>
            <button className={s.oauthButton} type="submit">
              SingUp
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
