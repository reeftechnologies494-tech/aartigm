import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import data from '../data/content.json';

const MainLayout = () => {
  return (
    <div className="min-h-screen relative flex justify-center items-center w-full font-sans overflow-x-hidden flex flex-col">
      <main className="flex-grow relative">
        <Outlet />
      </main>
      <Navigation data={data.navigation} />

      <Footer data={data.footer} />
    </div>
  );
};

export default MainLayout;
