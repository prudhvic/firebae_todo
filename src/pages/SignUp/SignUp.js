import { useFormik } from "formik";
import * as YUP from "yup";
import { createRoutesFromChildren } from "react-router-dom";
import { useAuthProvider } from "../../context/AuthContext";
import styles from "./SignUp.module.css";
const SignUp = () => {
  let { signup } = useAuthProvider();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      displayName: "",
    },
    onSubmit: (values) => {
      let { email, password, displayName } = values;
      signup(email, password, displayName);
    },
    validationSchema: YUP.object({
      email: YUP.string().email("invalid emils").required("email is required"),
      password: YUP.string()
        .max(8, "password min 8 characters")
        .required("passsword is required"),
      displayName: YUP.string()
        .required("displayname is required")
        .max(15, "displayname minimum is 15 characters"),
    }),
  });

  return (
    <>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.form_control}>
          <label>
            <span>Email</span>
          </label>
          <input
            type="text"
            value={formik.values.email}
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <p className={styles.error}>
            {formik.touched.email && formik.errors.email && formik.errors.email}
          </p>
        </div>
        <div className={styles.form_control}>
          <label>
            <span>password</span>
          </label>
          <input
            type="password"
            value={formik.values.password}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <p className={styles.error}>
            {formik.touched.password &&
              formik.errors.password &&
              formik.errors.password}
          </p>
        </div>
        <div className={styles.form_control}>
          <label>
            <span>displayname</span>
          </label>
          <input
            type="text"
            name="displayName"
            onBlur={formik.handleBlur}
            value={formik.values.displayName}
            onChange={formik.handleChange}
          />
          <p className={styles.error}>
            {formik.touched.displayName &&
              formik.errors.displayName &&
              formik.errors.displayName}
          </p>
        </div>
        <button type="submit">signUp</button>
      </form>
    </>
  );
};

export default SignUp;
