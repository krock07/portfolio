import React, { useState, useEffect } from "react";
import RichText from './RichText';
import { getContentfulHomepage } from "../Queries/index";
import '../Hero.css'
import ProjectThumbnails from "./ProjectThumbnails";
import {GridContainer} from '../Styles/layout'
import uuid from 'react-uuid'

const HomepageSections = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const theData = await getContentfulHomepage();
    setData(theData);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  if (Object.entries(data).length > 0) {
    return (
      <div className="homepage-section" id="homepagesections" key={uuid()} >
      <section id="main" >
        <div className="container">
          <div className="row">
            <div className="col-12">
          {data.fields.homepageSection.map((section) => {
          const { sectionTitle, projects, skills } = section.fields;
          console.log(section);
          return (
           
            <section key={uuid()}>
                <header className="major">
                <h2>{sectionTitle}</h2>
                </header>
              {skills }
              {projects && (
                <div className="row">
                  {projects.map((project, i) => {
                    return <ProjectThumbnails project={project} key={uuid()}/>
                  })}
                </div>
              )}
            </section>
          );
        })} 
          </div>
         </div>
        </div>
      </section>
      </div>
    );
  }
  return <div>...loading</div>;
};
export default HomepageSections;


