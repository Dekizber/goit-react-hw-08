import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import s from "../RegistrationForm/RegistrationForm.module.css";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().trim().email().required("Email is required"),
  password: Yup.string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };
  const handelSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validationSchema={loginSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field className={s.field} type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label className={s.label}>
            Password
            <Field
              className={s.field}
              type="password"
              name="password"
              autoComplete="true"
              suggested="current-password"
            />
            <ErrorMessage name="password" component="span" />
          </label>
          <button className={s.authBtn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
