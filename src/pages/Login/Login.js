import { useFormik } from "formik";
import { useAuthProvider } from "../../context/AuthContext";
import styles from "./Login.module.css";
const Login = () => {
  let { login } = useAuthProvider();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      let { email, password } = values;
      login(email, password);
    },
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
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label>
            <span>password</span>
          </label>
          <input
            type="password"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
          />
        </div>

        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
