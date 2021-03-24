import React, { useState } from "react";
import useBreakPoint from "../hooks/useBreakPoint";
import { Layout } from "../components/Layout";
import { Body } from "../components/Body";


const IndexPage = () => {
  const [isClosed, setClosed] = useState(false);
  const isStatic = useBreakPoint("sm");

  return (
    <Layout isClosed = {isClosed} setClosed = {setClosed} isStatic={isStatic}>
      <Body/>
    </Layout>
    
  );
};

export default IndexPage;
