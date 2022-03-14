import React from "react";
import Layout from "../components/layout";
import NoticiasAllsa from "../components/noticiasAllsa/noticiasAllsa";
const Noticias = (data) => {
  const noticias = data.data;
  return (
    <Layout title="Noticias">
      <NoticiasAllsa noticias={noticias} />
    </Layout>
  );
};

Noticias.getInitialProps = async () => {
  const response = await fetch(
    "https://backend-grupo-mejia.herokuapp.com/api/allsa/noticia"
  );

  const body = await response.json();

  return { data: body };
};

export default Noticias;
