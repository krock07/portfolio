import React from "react";
import RichText from "./RichText";
import uuid from 'react-uuid'


const ProjectThumbnails = (props) => {
  const id = props.project.sys.id

  let url='';

  const checkUrl = (props) => {
    if(id === "3OapxmWuA31960b5Ihd5Up") {
      url = "http://virtual-protest.org/" 
    }
    else if(id === "2Q4d5boaZik277C4ZazXoo")  {
      url = "https://krock07.github.io/Casino_war_project/"
    }
    else if(id === "5GbFIaxjQkWrsyNqQ2iVZ5") {
      url = "https://my-reviewagon-heroku-app.herokuapp.com/"
    }
    else if (id === "4PwadK7B8CnxkdUCpYVJ1b") {
      url = "https://the-bookmark-app.herokuapp.com/"
    }

  }
  checkUrl()

  return (
    


<div className="col-4 col-6-medium col-12-small thumbnail" key={uuid()}>
      <section className="box">
        <a href="" className="image featured">
        <img src={props.project.fields.thumbnail.fields.file.url} alt={props.project.fields.thumbnail.fields.title}/>
        </a> 
          <header>
            <h3>{props.project.fields.title}</h3>
          </header>     
          <p><RichText content={props.project.fields.description}/></p>
          <footer>
            <ul className="actions">
              <li>
              <a className="button alt" href={url} target="_blank" >Launch App</a>
              </li>
            </ul>
          </footer>   
      </section> 
      
</div>

  
  

  );
};

export default ProjectThumbnails;
