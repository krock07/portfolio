import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import HomepageSections from "./Components/HomepageSections";
import Hero from "./Hero.css";
import Layout from "./Layout";
import "./App.css";
import { getContentfulNav } from "./Queries/index";
// import * as headings from './Styles/type';

function App() {
  let [data, setData] = useState({});

  const getData = async () => {
    const theData = await getContentfulNav();
    setData(theData);
  };

  useEffect(() => {
    getData();
  }, []);
  if (data.fields) {
    return (
      <div id="demo-ifram-wrapper">
        <div class="heroimage">
          <div class="captioncontainer">
            <h1 class="captiontitle">{data.fields.websiteTitle}</h1>
            <h2 class="captiontitle">{data.fields.websiteSubtitle}</h2>
          </div>
        </div>
        <HomepageSections />
      </div>
    );
  }
  return (
    <Layout>
      <div>...loading</div>
    </Layout>
  );
}

export default App;
