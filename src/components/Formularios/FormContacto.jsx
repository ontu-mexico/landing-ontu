import {
  TextField,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { ModalPrivacidad } from "../Legales/ModalPrivacidad";
//emailJS
import emailjs from "@emailjs/browser";

export const FormContacto = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario ha sido enviado
  const [showMessage, setShowMessage] = useState(false); //Mensaje temporal
  //abrir modal
  const [isopen, setIsopen] = useState(false);
  //enviar Correo
  const enviarCorreo = async (values) => {
    try {
      await emailjs.send(
        "service_6n6xhgf",
        "template_mdm2j1f",
        values,
        "jfakOoUEp_iz3hFc4"
      );
      console.log("Correo electrónico enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  //enviar un correo de respuesta
  const monitorIncomingEmails = async () => {
    const { email } = formik.values.email;
    if (!email) {
      return;
    }
    console.log("Correo electrónico del usuario:", email);
    const replyMessage =
      "Gracias por tu correo electrónico. Nos pondremos en contacto contigo pronto."; // Mensaje de respuesta

    try {
      await emailjs.send(
        "service_6n6xhgf",
        "template_4rfcmsk",
        { to: email, message: replyMessage },
        "jfakOoUEp_iz3hFc4"
      );
      console.log("Respuesta enviada con éxito");
    } catch (error) {
      console.error("Error al enviar la respuesta:", error);
    }
  };
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
    onSubmit: async (formValue, { resetForm }) => {
      console.log("Formulario enviado");
      console.log(formValue);
      setFormSubmitted(true); // Marcar el formulario como enviado cuando se envía correctamente
      resetForm(); // Limpiamos los valores del formulario después de enviarlo
      setShowMessage(true); // Mostrar el mensaje temporal
      setTimeout(() => {
        setShowMessage(false); // Ocultar el mensaje temporal después de 3 segundos
      }, 6000);
      enviarCorreo(formValue);
      try {
        await monitorIncomingEmails(formValue);
      } catch (error) {
        console.error("Error al enviar la respuesta:", error);
      }
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
            ¡Tu solicitud ha sido enviado exitosamente! Espera nuestro mensaje
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
                name="nombre"
                {...formik.getFieldProps("nombre")}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                className="w-full "
              />
            </div>
            <div className=" mt-4">
              <TextField
                label="Teléfono"
                name="telefono"
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
                name="email"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                className="w-full"
              />
            </div>
          </div>
          <div className="font-monts text-[12px] mt-4">
            <Checkbox
              {...formik.getFieldProps("politicas")}
              error={formik.touched.politicas && formik.errors.politicas}
            />
            <span className="mr-1">Sí, he leído y acepto el </span>
            <span
              className="hover:text-blueOntu font-semibold cursor-pointer"
              onClick={() => setIsopen(true)}
            >
              Aviso de Privacidad
            </span>
          </div>
          {/* modal */}
          {isopen && (
            /* Modal Imagen */
            <div className="fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-5">
              <div className="bg-white p-1 rounded flex flex-col justify-end gap-5  max-h-[85vh]">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsopen(false)}
                    className="bg-white text-[30px] rounded-full text-grayOntu  h-8 w-8 text-center cursor-pointer m-2 hover:text-red-600 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                  >
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                </div>
                <ModalPrivacidad />
              </div>
            </div>
          )}

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

        <div className="flex justify-left items-left mt-8 mb-8 md:mb-3 md:mt-3 ">
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
