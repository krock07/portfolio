import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import HomepageSections from "./Components/HomepageSections";
import Hero from "./Hero.css";
import Layout from "./Layout";
import "./App.css";
import { getContentfulNav } from "./Queries/index";
import Skills from "./Components/Skills";
import Navigation from "./Components/Nav/Navigation";
import useSticky from './Components/Nav/useSticky'
// import * as headings from './Styles/type';

function App() {
  let [data, setData] = useState({});
  const { isSticky, element } = useSticky()

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
      <Navigation sticky={isSticky}/>
      <div id="demo-ifram-wrapper">
        <div class="heroimage">
          <div class="captioncontainer">
            <h1 class="captiontitle">{data.fields.websiteTitle}</h1>
            <h2 class="captiontitle">{data.fields.websiteSubtitle}</h2>
          </div>
        </div>
        
        <HomepageSections />
        <Skills/>
      </div>
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
