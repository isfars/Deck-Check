import React from "react";
import { Layout } from "../components/Layout";
import { Body } from "../components/Body";
import Store from "../components/Store";


const IndexPage = () => {

  return (
    <Store>
      <Layout>
        <Body/>
      </Layout>
    </Store>
  );
};

export default IndexPage;
