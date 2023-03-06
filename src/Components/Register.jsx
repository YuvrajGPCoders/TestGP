import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./RegisterScheema";
import "./Register.css";
const initialValues = {
  firstname: " ",
  lastname: " ",
  description: " ",
};
const Register = () => {
  

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
       
      },
    });
  return (
    <div>
      <h1 style={{}}>regestration Page</h1>
      <div>
        <form className="formregister" onSubmit={handleSubmit}>
        <input
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstname && touched.firstname ? (
                    <p className="">{errors.firstname} </p>
                  ) : null}
          <input
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastname && touched.lastname ? (
                    <p className="">{errors.lastname} </p>
                  ) : null}
          

          <textarea
                    type="text"
                    name="description"
                    placeholder="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.description && touched.description ? (
                    <p className="">{errors.description} </p>
                  ) : null}

          <input type="file" placeholder="image"
          name="image" 
           value={values.image}
           onChange={handleChange}
           onBlur={handleBlur}/>
          <input type="submit" placeholder="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
