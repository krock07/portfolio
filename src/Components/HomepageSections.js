import React, { useState, useEffect } from "react";
import RichText from './RichText';
import { getContentfulHomepage } from "../Queries/index";
import '../Hero.css'
import ProjectThumbnails from "./ProjectThumbnails";
import {GridContainer} from '../Styles/layout'

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
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
          {data.fields.homepageSection.map((section) => {
          const { sectionTitle, projects } = section.fields;
          console.log(section);
          return (
           
            <section>
                <header className="major">
                <h2>{sectionTitle}</h2>
                </header>
              {/* {textContent && <RichText content={textContent} />} */}
              {projects && (
                <div className="row">
                  {projects.map((project, i) => {
                    return <ProjectThumbnails project={project}/>
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
    );
  }
  return <div>...loading</div>;
};
export default HomepageSections;


