import React from "react";
import Layout from "../components/layout";
import ServiciosContent from "../components/serviciosContent/serviciosContent";
const Servicios = (data) => {
  const servicios = data.data.result;
  return (
    <Layout title="Servicios">
      <ServiciosContent servicios={servicios} />
    </Layout>
  );
};

Servicios.getInitialProps = async () => {
  const response = await fetch(
    "https://backend-grupo-mejia.herokuapp.com/api/allsa/servicios/carousel"
  );

  const body = await response.json();

  return { data: body };
};

export default Servicios;
