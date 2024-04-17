import React, { useState } from "react";
import { Formik } from "formik";
import { inputsInitialState, validationSchema2 } from "/src/components/Yup/yupHelmper.jsx";

export const Contacto = ({ children }) => {
  const handleSubmit = (values, { resetForm }) => {
    alert("Formulario enviado");
  };
  const formikState = {
    initialValues: inputsInitialState,
    validationSchema: validationSchema2,
    onSubmit: handleSubmit,
  };
  return (
    <Formik {...formikState} enableReinitialize>
      {children}
    </Formik>
  );
};
