import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
      <section className="flex height-fix">
        <nav class="flex desk">
            <div class="link-wrap">
              <div class="page-link active" dest="home">home</div>
              <div class="page-link" dest="about">about</div>
              <div class="page-link" dest="portfolio">portfolio</div>
              <div class="page-link" dest="contact">contact</div>
            </div>
            <i class="mdi mdi-menu"></i>
          </nav>

      </section>
        
    );
};

export default Navigation;