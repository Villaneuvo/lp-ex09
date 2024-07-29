import { useFormik } from "formik";
import * as Yup from "yup";
import "../../css/Home.css";

export default function Home() {
  // Formik handled data
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "Name must be at least 6 character")
        .required("Required"),
      email: Yup.string().email("Invalid email address"),
      password: Yup.string()
        .required("Required")
        .min(10, "Password must be at least 10 characters")
        .matches(/[a-z]/, "Must contain at least one lowercase")
        .matches(/[A-Z]/, "Must contain at least one uppercase")
        .matches(/[!@#$%^&*(),.?":{}[\]<>]/, "Must contain at least one symbol")
        .matches(/[0-9]/, "Must contain at least one number"),
    }),

    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          required
        />
        {formik.touched.name && formik.errors.name ? (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
