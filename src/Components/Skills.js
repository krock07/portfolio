import React from 'react';
import javascript from '../images/javascript-1.svg'
import react from '../images/react.svg'
import html from '../images/html5-without-wordmark-color.svg'
import rails from '../images/rails.svg'
import ruby from '../images/ruby.svg'
const Skills = () => {
    return (
        <section id="intro" class="container">
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
    </section>
    );
};

export default Skills;