import React, { useState } from "react";

import logo from "/src/assets/logo/white_logo_transparent_background.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .max(100, "Debe tener 100 caracteres o menos")
    .required("Campo requerido"),
  apellidos: Yup.string()
    .max(100, "Debe tener 100 caracteres o menos")
    .required("Campo requerido"),
  telefono: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, "Formato de teléfono inválido")
    .required("El teléfono es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"),
  curp: Yup.string()
    .max(18, "Solo se permiten 18 dígitos")
    .min(18, "Solo se permiten 18 dígitos")
    .required("Campo requerido"),
  rfc: Yup.string()
    .max(13, "Solo se permiten 13 dígitos")
    .min(13, "Solo se permiten 13 dígitos")
    .required("Campo requerido"),
  direccion: Yup.string()
    .max(100, "Debe tener 100 caracteres o menos")
    .required("Campo requerido"),
  ineFrontal: Yup.mixed()
    .required("")
    .test(
      "tipo-archivo",
      "Solo se permiten archivos de imagen (png, jpg, jpeg)",
      (value) => {
        if (!value) return true; // Si no se selecciona un archivo, la validación pasa
        const validTypes = ["image/png", "image/jpg", "image/jpeg"];
        return validTypes.includes(value.type);
      }
    )
    .test(
      "tamaño-archivo",
      "El tamaño del archivo debe ser menor a 5MB",
      (value) => {
        if (!value) return true; // Si no se selecciona un archivo, la validación pasa
        return value.size <= 5 * 1024 * 1024; // 5MB en bytes
      }
    ),
  ineTrasera: Yup.mixed()
    .required("Debe seleccionar un archivo tipo png, jpg o jpeg")
    .test(
      "tipo-archivo",
      "Solo se permiten archivos de imagen (png, jpg, jpeg)",
      (value) => {
        if (!value) return true; // Si no se selecciona un archivo, la validación pasa
        const validTypes = ["image/png", "image/jpg", "image/jpeg"];
        return validTypes.includes(value.type);
      }
    )
    .test(
      "tamaño-archivo",
      "El tamaño del archivo debe ser menor a 5MB",
      (value) => {
        if (!value) return true; // Si no se selecciona un archivo, la validación pasa
        return value.size <= 5 * 1024 * 1024; // 5MB en bytes
      }
    ),
  opcionSeleccionada: Yup.string().required("Debes seleccionar una opción"),
  //Ingeniero
  cedula: Yup.mixed()
    .required("Debe seleccionar un archivo tipo png, jpg o jpeg")
    .test(
      "tipo-archivo",
      "Solo se permiten archivos de imagen (png, jpg, jpeg)",
      (value) => {
        if (!value) return true; // Si no se selecciona un archivo, la validación pasa
        const validTypes = ["image/png", "image/jpg", "image/jpeg"];
        return validTypes.includes(value.type);
      }
    )
    .test(
      "tamaño-archivo",
      "El tamaño del archivo debe ser menor a 5MB",
      (value) => {
        if (!value) return true; // Si no se selecciona un archivo, la validación pasa
        return value.size <= 5 * 1024 * 1024; // 5MB en bytes
      }
    ),
  certificacion: Yup.string()
    .max(50, "Debe tener 100 caracteres o menos")
    .required("Campo requerido"),
});
export const FormPersonal = () => {
  //Mostrar puesto
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [mostrarMantenimiento, setMostrarMantenimiento] = useState(false);
  const [mostrarIngeniero, setMostrarIngeniero] = useState(false);
  const [mostrarInstalador, setMostrarInstalador] = useState(false);
  const handleSubmit = (values, { setSubmitting }) => {
    // Verificar si todos los campos tienen datos
    const allFieldsFilled = Object.values(values).every(
      (value) => !!value && value !== ""
    );

    if (allFieldsFilled) {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    } else {
      // Si algún campo está vacío, muestra un mensaje de error
      alert(
        "Por favor, complete todos los campos antes de enviar el formulario."
      );
      setSubmitting(false);
    }
  };

  //Evento elegir una opcin del Select
  const handleChange = (event) => {
    const value = event.target.value;
    setOpcionSeleccionada(value);
    // Actualizar la visibilidad de los inputs según la opción seleccionada
    setMostrarMantenimiento(value === "mantenimiento");
    setMostrarIngeniero(value === "ingeniero");
    setMostrarInstalador(value === "instalador");
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    // Manejar el envío del formulario aquí
  };

  return (
    <Formik
      initialValues={{
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        curp: "",
        rfc: "",
        direccion: "",
        ineFrontal: undefined,
        ineTrasera: undefined,
        opcionSeleccionada: "",
        cedula: undefined,
        certificacion: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div className="mt-4 ">
            <div className="flex w-full justify-between ">
              <div className="w-1/2">
                <label htmlFor="nombre" className="font-medium text-[14px]">
                  Nombre(s)
                </label>
                <Field
                  as="input"
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-[14px] border-b-2 bg-transparent border-grayOntu "
                />
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="text-red-500 text-[11px] mt-1"
                />
              </div>
              <div className="w-1/2 mx-4">
                <label htmlFor="apellidos" className="font-medium text-[14px]">
                  Apellidos
                </label>
                <Field
                  as="input"
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[14px] border-b-2 bg-transparent border-grayOntu "
                />
                <ErrorMessage
                  name="apellidos"
                  component="div"
                  className="text-red-500 text-[11px] mt-1"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="telefono" className="font-medium text-[14px]">
              Telefono
            </label>
            <Field
              as="input"
              type="tel"
              id="telefono"
              name="telefono"
              className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[14px] border-b-2 bg-transparent border-grayOntu p-1"
            />
            <ErrorMessage
              name="telefono"
              component="div"
              className="text-red-500 text-[11px] mt-1"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="font-medium text-[14px]">
              Email
            </label>
            <Field
              as="input"
              type="email"
              id="email"
              name="email"
              className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[14px] border-b-2 bg-transparent border-grayOntu p-1"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-[11px] mt-1"
            />
          </div>
          <div className="mt-4">
            <div className="flex w-full">
              <div className="w-1/2">
                <label htmlFor="curp" className="font-medium text-[14px]">
                  CURP
                </label>
                <Field
                  as="input"
                  type="curp"
                  id="curp"
                  name="curp"
                  className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-[14px] border-b-2 bg-transparent border-grayOntu p-1"
                />
                <ErrorMessage
                  name="curp"
                  component="div"
                  className="text-red-500 text-[11px] mt-1"
                />
              </div>
              <div className="w-1/2 mx-4">
                <label htmlFor="rfc" className="font-medium text-[14px]">
                  RFC
                </label>
                <Field
                  as="input"
                  type="rfc"
                  id="rfc"
                  name="rfc"
                  className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[14px] border-b-2 bg-transparent border-grayOntu p-1"
                />
                <ErrorMessage
                  name="rfc"
                  component="div"
                  className="text-red-500 text-[11px] mt-1"
                />
              </div>
            </div>
          </div>
          <div className="mt-4"></div>
          <div className="mt-4">
            <label htmlFor="direccion" className="font-medium text-[14px]">
              Dirección
            </label>
            <Field
              as="input"
              type="direccion"
              id="direccion"
              name="direccion"
              className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-[14px] border-b-2 bg-transparent border-grayOntu p-1"
            />
            <ErrorMessage
              name="direccion"
              component="div"
              className="text-red-500 text-[11px] mt-1"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="ineFrontal" className="font-medium text-[14px]">
              Imagen de INE Frontal
            </label>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center">
                <Field
                  type="file"
                  name="ineFrontal"
                  id="ineFrontal"
                  className="mt-4 text-[13.5px] text-gray-900 flex justify-center px-6 lg:px-16 pt-6 pb-6 border-2 border-gray-300 border-dashed rounded-md "
                />
                <span className="text-blueOntu text-[13px]">
                  o arrastralo aqui
                </span>
              </div>
            </div>

            <ErrorMessage
              name="ineFrontal"
              component="div"
              className="text-red-500 text-[11px] mt-1"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="ineTrasera" className="font-medium text-[14px]">
              Imagen de INE Trasera
            </label>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center">
                <Field
                  type="file"
                  name="ineTrasera"
                  id="ineTrasera"
                  className="mt-4 text-[13.5px] text-gray-900 flex justify-center px-6 lg:px-16 pt-6 pb-6 border-2 border-gray-300 border-dashed rounded-md "
                />
                <span className="text-blueOntu text-[13px]">
                  o arrastralo aqui
                </span>
              </div>
            </div>

            <ErrorMessage
              name="ineTrasera"
              component="div"
              className="text-red-500 text-[11px] mt-1"
            />
          </div>
          <div className="mt-4">
            <label className="font-medium text-[14px]">
              Puesto
              <Field
                as="select"
                name="opcionSeleccionada"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={opcionSeleccionada}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="ingeniero">Ingeniero</option>
                <option value="instalador">Instalador</option>
              </Field>
              <ErrorMessage
                name="puesto"
                component="div"
                className="text-red-500 text-[11px] mt-1"
              />
            </label>
            {mostrarMantenimiento && <div></div>}
            {mostrarIngeniero && (
              <div>
                <div className="mt-4">
                  <label htmlFor="cedula" className="font-medium text-[14px]">
                    Imagen de Cédula Profesional
                  </label>
                  <div className="text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Field
                        type="file"
                        name="cedula"
                        id="cedula"
                        className="mt-4 text-[13.5px] text-gray-900 flex justify-center px-6 lg:px-16 pt-6 pb-6 border-2 border-gray-300 border-dashed rounded-md "
                      />
                      <span className="text-blueOntu text-[13px]">
                        o arrastralo aqui
                      </span>
                    </div>
                  </div>

                  <ErrorMessage
                    name="cedula"
                    component="div"
                    className="text-red-500 text-[11px] mt-1"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="certificacion"
                    className="font-medium text-[14px]"
                  >
                    Tipo de certificacion
                  </label>
                  <Field
                    as="input"
                    type="certificacion"
                    id="certificacion"
                    name="certificacion"
                    className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[14px] border-b-2 bg-transparent border-grayOntu "
                  />
                  <ErrorMessage
                    name="certificacion"
                    component="div"
                    className="text-red-500 text-[11px] mt-1"
                  />
                </div>
              </div>
            )}
            {mostrarInstalador && (
              <div>
                <div className="mt-4">
                  <label
                    htmlFor="certificacion"
                    className="font-medium text-[14px]"
                  >
                    Tipo de certificacion
                  </label>
                  <Field
                    as="input"
                    type="certificacion"
                    id="certificacion"
                    name="certificacion"
                    className="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[14px] border-b-2 bg-transparent border-grayOntu "
                  />
                  <ErrorMessage
                    name="certificacion"
                    component="div"
                    className="text-red-500 text-[11px] mt-1"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-8  ">
            <button
              type="submit"
              className="bg-ontu w-[230px] h-[48px] font-monts font-bold uppercase mx-auto  md:mx-0 text-white hover:bg-white hover:text-ontu hover:border-2 hover:border-ontu hover:font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-sm "
              disabled={isSubmitting}
            >
              Registrar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
