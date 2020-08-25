import React from 'react';
import javascript from '../../images/javascript-1.svg'
import react from '../../images/react.svg'
import html from '../../images/html5-without-wordmark-color.svg'
import rails from '../../images/rails.svg'
import ruby from '../../images/ruby.svg'
import css3 from '../../images/css3.svg'
import sass from '../../images/sass-1.svg'
import bootstrap from '../../images/bootstrap-4.svg'
import materialize from '../../images/materialize.svg'
import bulma from '../../images/bulma.svg'
import mongodb from '../../images/mongodb.svg'
import postgresql from '../../images/postgresql.svg'
import "./Skills.css"

const Skills = () => {
    return (
        <div className="skills-section" id="skills">
            <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">HTML</h4>
          <div class="row text-center">
            <div class="col s4 m2">
            <img className="icon solid featured" src={html} alt="react logo" class="responsive-img"/>HTML 5
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={react} alt="react logo" class="responsive-img"/> React
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">CSS</h4>
          <div class="row text-center">
            <div class="col s4 m2">
            <img className="icon solid featured" src={css3} alt="CSS logo" class="responsive-img"/> CSS3
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={sass} alt="SASS logo" class="responsive-img"/>SASS
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={bootstrap} alt="bootstrap logo" class="responsive-img"/>Bootsrap
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={materialize} alt="materialize logo" class="responsive-img"/>Materialize
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={bulma} alt="bulma logo" class="responsive-img"/>Bulma
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="brown-text light">Back-End</h4>
          <div class="row text-center">
            <div class="col s4 m2">
            <img className="icon solid featured" src={ruby} alt="ruby logo" class="responsive-img"/> Ruby
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={rails} alt="rail logo" class="responsive-img"/>Rails
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={mongodb} alt="mongodb logo" class="responsive-img"/>Mongodb
            </div>
            <div class="col s4 m2">
            <img className="icon solid featured" src={postgresql} alt="postgresl logo" class="responsive-img"/>PostgreSQL
            </div>
          </div>
        </div>
      </div>
        {/* <section id="intro" class="container">
        <div class="row">
            <div class="col-4 col-12-medium">
                <section class="first">
                    <img className="icon solid featured" src={react} alt="react logo"/>
                    <header>
                        <h2>React</h2>
                    </header>
                </section>
            </div>
            <div class="col-4 col-12-medium">
                <section class="first">
                    <img className="icon solid featured" src={javascript} alt="javascript logo"/>
                    <header>
                        <h2>Javascript</h2>
                    </header>
                </section>
            </div>
            <div class="col-4 col-12-medium">
                <section class="last">
                    <img className="icon solid featured" src ={html} alt="rails logo"/>
                    <header>
                        <h2>HTML 5</h2>
                    </header>
                    
                </section>
            </div>
            <div class="col-4 col-12-medium">
                <section class="last">
                <img className="icon solid featured" src ={ruby} alt="ruby logo"/>
                    <header>
                        <h2>Ruby</h2>
                    </header>
                </section>
            </div>
            <div class="col-4 col-12-medium">
                <section class="last">
                <img className="icon solid featured" src ={rails} alt="rails logo"/>
                    <header>
                        <h2>Rails</h2>
                    </header>
                
                </section>
            </div>
            
        </div>
    </section> */}
    </div>
    );
};

export default Skills;