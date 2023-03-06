import React, { useEffect } from "react";
import "./LoginNew.css";
import { useFormik } from "formik";
import { signUpSchema } from "./Signupscheema";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: " ",
  password: " ",
};
const LoginNew = () => {
  const nav = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
    sessionStorage.setItem( "user" ,Math.cosh(3))
        nav("*");
      },
    });



  return (
    <>
      <tbody>
        <div className="container1">
          <div className="drop1">
            <div className="content1">
              <h2> Log In Page</h2>
              <form onSubmit={handleSubmit}>
                <div className="inputbox">
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username ? (
                    <p className="">{errors.username} </p>
                  ) : null}
                </div>

                <div className="inputbox">
                  <input
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="password"
                  />
                  {errors.password && touched.password ? (
                    <p className="">{errors.password} </p>
                  ) : null}
                </div>

                <div className="inputbox">
                  <button className="inputbox" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </tbody>
    </>
  );
};

export default LoginNew;
