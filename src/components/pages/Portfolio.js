import React from 'react';
import { jobs } from '../models/jobs';

export const Portfolio = () => {
  return (
    <div className="pages">
      <h1 className="heading">Portfolio</h1>

      {
        jobs.map((job) => {
          return (
          <article key={job.id} className="job">
            <h2>{job.company}</h2>
            <h3>{job.position}</h3>
          </article>)
        })
      }
    </div>
  )
}
