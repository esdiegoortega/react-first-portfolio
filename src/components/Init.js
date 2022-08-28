import React from 'react';
import { Link } from 'react-router-dom';

export const Init = () => {
  return (
    <div className="home">
      <h1>
        My name is <strong>Diego Ortega</strong>, 
        in years of working in Technology and Software Development, 
        I’ve got experience in a lot of projects, on different business, like factories, 
        industries, sales stores, clubs and others, participating not only in the phase 
        of obtaining the requirements but also in the analysis, evaluation, development 
        and implementation of the products and services.
        Constantly trying to support my work in the use of agile methodologies, 
        like Scrum or Kanban.
        I am always thinking and working to add value to the customer, 
        and fulfill their needs in the best way possible.
        Recently went back to work as a <strong>Backend Developer</strong>, 
        first with PHP and now with Javascript and Typescript frameworks.      
      </h1>
      <hr/>
      <h2>
        Working now as a Software Engineer.
        <p><Link to="/contact">Contact me.</Link></p>
      </h2>

      <section className="last-jobs">
        <h2 className="heading">My last works</h2>
        <p>Some of my jobs are here</p>

        <div className="jobs">

        </div>
      </section>
    </div>
  )
}
