import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Init } from '../Init';
import { Services, Contact, Resume, Portfolio, Errors } from '../pages';
import { HeaderNav } from '../layout/HeaderNav';
import { Footer } from '../layout/Footer';

export const MyRoutes = () => {
  return (
    <BrowserRouter>

    <HeaderNav />
    
    <section className="content">
      <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Errors />} />
      </Routes>
    </section>

    <Footer />
    
    </BrowserRouter>
  )
}
