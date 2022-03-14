import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
import Start from "../components/start/start";
import "isomorphic-fetch";

const Loading = "/images/gif/intro.gif";

const Index = (data) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  const servicios = data.data.result;
  return (
    <>
      {isLoading ? (
        <>
          <Head>
            <title> Grupo Mejía </title>
            <meta charSet="utf-8" />
            <meta lang="es" />
            <link rel="shortcut icon" href="static/logo.ico"></link>
          </Head>
          <div className="carga">
            <img className="carga-img" src={Loading} />
          </div>
        </>
      ) : (
        <Layout title="Inicio">
          <Start servicios={servicios} />
        </Layout>
      )}
    </>
  );
};

Index.getInitialProps = async () => {
  const response = await fetch(
    "https://backend-grupo-mejia.herokuapp.com/api/allsa/servicios/carousel"
  );

  const body = await response.json();

  return { data: body };
};

export default Index;
