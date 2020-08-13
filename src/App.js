import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import HomepageSections from "./Components/HomepageSections";
import Hero from "./Hero.css";
import Layout from "./Layout";
import About from './Components/About/About'
import { Route, Switch, Router, Link } from "react-router-dom";
import "./App.css";
import { getContentfulNav } from "./Queries/index";
import Skills from "./Components/Skills";
import Navigation from "./Components/Nav/Navigation";

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
      <>
        <Navigation />
        <div id="demo-ifram-wrapper">
          <div class="heroimage">
            <div class="captioncontainer">
              <h1 class="captiontitle">{data.fields.websiteTitle}</h1>
              <h2 class="captiontitle">{data.fields.websiteSubtitle}</h2>
            </div>
          </div>
        </div>
        <HomepageSections />
        <Skills />
        <About/>
      </>
    );
  }
  return (
    <Layout>
      <div>...loading</div>
    </Layout>
  );
}

export default App;
