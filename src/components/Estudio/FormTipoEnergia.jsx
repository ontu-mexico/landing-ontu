import {
  TextField,
  FormControl,
  FormHelperText,
  Select, // Importa el componente Select
  MenuItem, // Importa el componente MenuItem
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormComplete } from "./FormComplete";
//emailJS
import emailjs from "@emailjs/browser";

export const FormTipoEnergia = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario ha sido enviado
  const [showMessage, setShowMessage] = useState(false); //Mensaje temporal
  const [selectedOption, setSelectedOption] = useState(""); //opcon form
  //enviar Correo
  const enviarCorreo = async (formValue) => {
    try {
      await emailjs.send(
        "service_6n6xhgf",
        "template_mdm2j1f",
        formValue,
        "jfakOoUEp_iz3hFc4"
      );
      console.log("Correo electrónico enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  //enviar un correo de respuesta
  const monitorIncomingEmails = async (formValue) => {
    const { email } = formValue;
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

  const initialValues2 = {
    numServicio: "",
    pago: "",
    tarifa: "",
    espacio: "",
  };
  const validationSchema2 = Yup.object().shape({
    numServicio: Yup.string()
      .matches(
        /^[0-9]+$/,
        "El número del servicio solo puede contener 13 números"
      )
      .matches(/^[0-9]\d{12}$/, "Utiliza solo 13 dígitos de tu servicio")
      .required("El número del servicio es obligatorio"),
    pago: Yup.string()
      .matches(/^[0-9]+$/, "El monto del pago solo puede contener números")
      .required("El pago es obligatorio"),
    tarifa: Yup.string().required("Selecciona el tipo de tarifa CFE"),
    espacio: Yup.string().required(
      "Selecciona si tienes espacio para los paneles solares"
    ),
  });
  const handleSubmit2 = async (formValue, { resetForm }) => {
    console.log("Formulario enviado");
    console.log(formValue);
    setFormSubmitted(true); // Marcar el formulario como enviado cuando se envía correctamente
    console.log("algo aqui");
    resetForm(); // Limpiamos los valores del formulario después de enviarlo
    setShowMessage(true); // Mostrar el mensaje temporal
    setTimeout(() => {
      setShowMessage(false); // Ocultar el mensaje temporal después de 3 segundos
    }, 6000);
    try {
      console.log("Intentando enviar correo...");
      await enviarCorreo(formValue);
      console.log("Correo enviado con éxito");

      console.log("Intentando monitorear correos entrantes...");
      await monitorIncomingEmails(formValue);
      console.log("Monitoreo de correos entrantes completado");
    } catch (error) {
      console.error("Error al enviar o monitorear correos:", error);
    }
  };

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
    <div className="m-2 font-monts text-[14px] ">
      {formSubmitted || selectedOption === "Finalizar" ? (
        <FormComplete />
      ) : (
        <Formik
          initialValues={initialValues2}
          validationSchema={validationSchema2}
          onSubmit={handleSubmit2}
        >
          {({ isValid, getFieldProps, touched, errors }) => (
            <Form>
              {selectedOption === "Si" ? (
                <FormTipoEnergia />
              ) : (
                <>
                  <FormControl fullWidth error={!isValid} component="fieldset">
                    <h1 className="mt-5 text-ontu font font-semibold text-[16px]">
                      Datos de energía
                    </h1>
                    <div className="flex flex-col md:flex-row md:space-x-4 ">
                      <div className="mt-4 md:w-1/2">
                        <TextField
                          label="Número de Servicio"
                          name="numServicio"
                          onKeyPress={handlePhoneKeyPress}
                          {...getFieldProps("numServicio")}
                          error={
                            touched.numServicio && Boolean(errors.numServicio)
                          }
                          className="w-full "
                        />
                      </div>
                      <div className=" mt-4 md:w-1/2">
                        <TextField
                          label="¿Cuánto fue lo último que pagaste?"
                          name="pago"
                          onKeyPress={handlePhoneKeyPress}
                          {...getFieldProps("pago")}
                          error={touched.pago && Boolean(errors.pago)}
                          className="w-full "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 ">
                      <div className="mt-4 md:w-1/2">
                        <FormControl
                          error={touched.tarifa && Boolean(errors.tarifa)}
                          className="w-full"
                        >
                          <InputLabel
                            id="tarifa-label"
                            className="bg-white p-2"
                          >
                            ¿Cuál es tu tarifa CFE?
                          </InputLabel>{" "}
                          {/* Aquí se utiliza InputLabel */}
                          <Select
                            labelId="tarifa-label" // Propiedad labelId para asociar el label con el Select
                            name="tarifa"
                            {...getFieldProps("tarifa")}
                          >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="1A">1A</MenuItem>
                            <MenuItem value="1B">1B</MenuItem>
                            <MenuItem value="1C">1C</MenuItem>
                            <MenuItem value="1D">1D</MenuItem>
                            <MenuItem value="1E">1E</MenuItem>
                            <MenuItem value="1F">1F</MenuItem>
                            <MenuItem value="DAC">DAC</MenuItem>
                          </Select>
                          <FormHelperText>
                            {touched.tarifa && errors.tarifa}
                          </FormHelperText>
                        </FormControl>
                      </div>
                      <div className=" mt-4 md:w-1/2">
                        <FormControl
                          error={touched.espacio && Boolean(errors.espacio)}
                          className="w-full"
                        >
                          <InputLabel
                            id="espacio-label"
                            className="bg-white p-2"
                          >
                            ¿Tienes espacio en un techo para paneles?
                          </InputLabel>{" "}
                          {/* Aquí se utiliza InputLabel */}
                          <Select
                            labelId="espacio-label" // Propiedad labelId para asociar el label con el Select
                            name="espacio"
                            {...getFieldProps("espacio")}
                          >
                            <MenuItem value="Si">Si</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="NoSe">No lo sé</MenuItem>
                          </Select>
                          <FormHelperText>
                            {touched.espacio && errors.espacio}
                          </FormHelperText>
                        </FormControl>
                      </div>
                    </div>

                    {(touched.numServicio ||
                      touched.pago ||
                      touched.tarifa ||
                      touched.espacio) && (
                      <FormHelperText error>
                        {errors.numServicio ||
                          errors.pago ||
                          errors.tarifa ||
                          errors.espacio}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <div className="mt-8 text-center text-xl font-monts text-black">
                    <div className="flex justify-end items-center mt-10 mb-8 md:mb-5 md:mt-5 ">
                      <button
                        type="submit"
                        onClick={() => {
                          setSelectedOption("Finalizar");
                          setFormSubmitted(true);
                        }}
                        disabled={
                          !isValid ||
                          !touched.numServicio ||
                          !touched.pago ||
                          !touched.tarifa ||
                          !touched.espacio
                        }
                        className="w-[180px] h-[40px] bg-slate-600 font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                      >
                        Finalizar
                      </button>
                    </div>
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
