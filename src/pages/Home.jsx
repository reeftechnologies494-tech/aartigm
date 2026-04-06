import React from 'react';
import data from '../data/content.json';

import Hero from '../components/Hero';
import BuyOnline from '../components/BuyOnline';
import Bestselling from '../components/Bestselling';
import Collection from '../components/Collection';
import CertifiedStones from '../components/CertifiedStones';
import Services from '../components/Services';
import CustomDesign from '../components/CustomDesign';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <Hero data={data.hero} />
      <BuyOnline data={data.buy_online} />
      <Bestselling data={data.bestselling} />
      <Collection data={data.collection} />
      <CertifiedStones />
      <Services data={data.services} />
      <CustomDesign data={data.custom_design} />
      <Testimonials data={data.testimonials} />
      <Blog data={data.blog} />
    </div>
  );
};

export default Home;
