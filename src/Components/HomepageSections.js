import React, { useState, useEffect } from "react";

import { getContentfulHomepage } from "../Queries/index";

const HomePageSections = () => {
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
      <main>
        {data.fields.homepageSection.map((section) => {
          const { sectionTitle, textContent, projects } = section.fields;
          console.log(section.fields);
          return (
            <section>
              <h2>{sectionTitle}</h2>
              {/* {textContent && <RichText content={textContent} />} */}
              {projects && (
                <div>
                  {projects.map((project, i) => {
                    return (
                      <div>
                        <h3>{project.fields.title}</h3>
                        <img
                          src={project.fields.thumbnail.fields.file.url}
                          alt={project.fields.thumbnail.fields.title}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </main>
    );
  }
  return <div>...loading</div>;
};
export default HomePageSections;
