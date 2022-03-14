import React, { useEffect, useState } from "react";
import styles from "./contactoAllsa.module.css";
import Iframe from "react-iframe";
import Head from "next/head";

const ContactoAllsa = () => {
  var Recaptcha = require("react-recaptcha");
  const [captcha, setCaptcha] = useState(false);
  const [open, setOpen] = useState(false);
  const [resultado, setResultado] = useState("");

  const close = () => {
    setOpen(false);
  };

  const sendEmail = async (e) => {
    if (captcha) {
      e.preventDefault();
      const res = await fetch(
        "https://backend-grupo-mejia.herokuapp.com/api/mail",
        {
          method: "POST",
          body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await res.json();

      console.log(result);

      if (result.Code == null) {
        setResultado("Datos enviados correctamente");
        setOpen(true);
      } else {
        setResultado("Error");
        setOpen(true);
      }
    }
  };

  const Callback = () => {};

  const VerifyCallback = (response) => {
    if (response.length !== 0) {
      setCaptcha(true);
    }
  };

  return (
    <div className={styles.contenedor__contacto}>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        ></script>
      </Head>
      <div className={styles.contenedor__formulario}>
        <form className={styles.formulario}>
          <h1>Escribenos y nos pondremos en contacto</h1>
          <div className={styles.formulario__content}>
            <div className={styles.formulario__row}>
              <label htmlFor="name">Nombres y Apellidos</label>
              <input
                type="text"
                id="name"
                placeholder="Ingrese nombres y apellidos"
              />
            </div>
            <div className={styles.formulario__column}>
              <div className={styles.formulario__row2}>
                <label htmlFor="email">Correo Electronico</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingrese correo electronico"
                />
              </div>
              <div className={styles.formulario__row}>
                <label htmlFor="phone">Telefono</label>
                <input type="text" id="phone" placeholder="Ingrese telefono" />
              </div>
            </div>
            <div className={styles.formulario__row}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="10"
                placeholder="Ingrese su mensaje"
              ></textarea>
            </div>
            <Recaptcha
              sitekey="6Le1aFIbAAAAAJEj9dJ1GChauR2vqAX06ZLAw7Wd"
              render="explicit"
              onloadCallback={Callback}
              verifyCallback={VerifyCallback}
            />
            <button type="submit" className={styles.formulario__captcha}>
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className={styles.contenedor__mapa}>
        {/* <div style="width: 100%">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=-12.0983335,-77.0135804+(Allssa%20All%20Security)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">
            Dibujar radio en el mapa
          </a> */}
        {/* </div> */}

        <div className={styles.mapa}>
          <Iframe
            url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=-12.0983335,-77.0135804+(Allssa%20All%20Security)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="500px"
            height="500px"
            id="myId"
            className=""
            position="relative"
          />
          <p>José Gálvez Barrenechea 592 Oficina 603</p>
        </div>
      </div>
    </div>
  );
};
export default ContactoAllsa;
