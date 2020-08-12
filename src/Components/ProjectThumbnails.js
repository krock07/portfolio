import React from "react";
import RichText from "./RichText";


const ProjectThumbnails = (props) => {
  return (
    


<div className="col-4 col-6-medium col-12-small thumbnail">
      <section className="box">
        <a href="#" className="image featured">
        <img src={props.project.fields.thumbnail.fields.file.url} alt={props.project.fields.thumbnail.fields.title}/>
        </a> 
          <header>
            <h3>{props.project.fields.title}</h3>
          </header>     
          <p><RichText content={props.project.fields.description}/></p>
          <footer>
            <ul className="actions">
              <li>
              <a className="button alt" href="#">Learn More</a>
              </li>
            </ul>
          </footer>   
      </section> 
      
</div>
  
  

  );
};

export default ProjectThumbnails;
