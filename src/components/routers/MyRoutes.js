import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Init } from '../Init';
import { Services, Contact, Resume, Portfolio, Errors } from '../pages';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Errors />} />
    </Routes>
    
    </BrowserRouter>
  )
}
