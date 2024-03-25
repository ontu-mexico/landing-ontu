import {
  TextField,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { Form, useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export const FormContacto = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario ha sido enviado
  const [showMessage, setShowMessage] = useState(false); //Mensaje temporal
  ///Estado de Formik
  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      politicas: false,
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("El nombre es obligatorio"),
      telefono: Yup.string()
        .matches(/^[0-9]+$/, "El teléfono solo puede contener números")
        .matches(/^[1-9]\d{9}$/, "Utiliza solo 10 dígitos de tu teléfono")
        .required("El teléfono es obligatorio"),
      email: Yup.string()
        .email("Formato de correo electrónico inválido")
        .required("El correo electrónico es requerido"),
      politicas: Yup.bool()
        .oneOf([true], "Debe leer y aceptar las políticas de privacidad")
        .required("Debes aceptar las políticas de privacidad"),
    }),
    onSubmit: (formValue, { resetForm }) => {
      console.log("Formulario enviado");
      console.log(formValue);
      setFormSubmitted(true); // Marcar el formulario como enviado cuando se envía correctamente
      resetForm(); // Limpiamos los valores del formulario después de enviarlo
      setShowMessage(true); // Mostrar el mensaje temporal
      setTimeout(() => {
        setShowMessage(false); // Ocultar el mensaje temporal después de 3 segundos
      }, 6000);
    },
  });

  // Función para permitir solo números en el campo de teléfono
  const handlePhoneKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(keyValue)) {
      event.preventDefault();
    }
  };

  return (
    <div className="m-5 md:m-10 font-monts text-[14px] ">
      <div className="w-full m-2 bg-gray-20 rounded-md font-monts text-[14px]">
        {showMessage && (
          <p className="text-blue-700">
            ¡Tu solicitus ha sido enviado exitosamente! Espera nuestro mensaje
            para seguir con el proceso.
          </p>
        )}
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth error={!formik.isValid} component="fieldset">
          <div className="flex flex-col md:flex-row md:space-x-4 ">
            <div className="mt-4">
              <TextField
                label="Nombre"
                {...formik.getFieldProps("nombre")}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                className="w-full "
              />
            </div>
            <div className=" mt-4">
              <TextField
                label="Teléfono"
                {...formik.getFieldProps("telefono")}
                error={
                  formik.touched.telefono && Boolean(formik.errors.telefono)
                }
                onKeyPress={handlePhoneKeyPress} // Llama a la función handlePhoneKey
                inputMode="numeric" // Para permitir solo entrada numérica en dispositivos móviles
                className="w-full"
              />
            </div>
            <div className=" mt-4">
              <TextField
                label="Email"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                className="w-full"
              />
            </div>
          </div>
          <div className="font-monts text-[12px] mt-4">
            <Checkbox
              {...formik.getFieldProps("politicas")}
              error={
                formik.touched.politicas && Boolean(formik.errors.politicas)
              }
            />
            <span className="mr-1">Sí, he leído y acepto la de</span>
            <span className="hover:text-blueOntu font-semibold">
              <Link to="#">Política de Privacidad</Link>
            </span>
            .
          </div>

          {(formik.touched.nombre ||
            formik.touched.telefono ||
            formik.touched.email ||
            formik.touched.politicas) && (
            <FormHelperText error>
              {formik.errors.nombre ||
                formik.errors.telefono ||
                formik.errors.email ||
                formik.errors.politicas}
            </FormHelperText>
          )}
        </FormControl>

        <div className="flex justify-center items-center mt-8 mb-8 md:mb-3 md:mt-3 ">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="bg-blueOntu w-[160px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
          >
            Enviar
          </button>
        </div>
      </Form>
    </div>
  );
};
