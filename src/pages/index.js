import React, { useState, useEffect } from "react";
import useBreakPoint from "../hooks/useBreakPoint";
import { Layout } from "../components/Layout";
import { Body } from "../components/Body";
import firebase from "../database/firebase";
import Store from "../components/Store";

// import { Test } from '../components//test'

const IndexPage = () => {
  const [isClosed, setClosed] = useState(false);
  const [cards, setCards] = useState([]);
  const isStatic = useBreakPoint("sm");

  return (
    <Store>
      <Layout isClosed={isClosed} setClosed={setClosed} isStatic={isStatic}>
        <Body/>
      </Layout>
      {/* <Test/> */}
    </Store>
  );
};

export default IndexPage;
