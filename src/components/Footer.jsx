import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-primary text-light/80 pt-2 w-full">
      <div className="max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">

        {/* Brand Profile */}
        <div>
          <h4 className="text-white font-bold text-lg mb-2 tracking-wide">BRAND PROFILE</h4>
          <ul className="space-y-1">
            {data.brand_profile.map((item, idx) => (
              <li key={idx}><a href="#" className="hover:text-white transition-colors text-sm">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white font-bold text-lg mb-2 tracking-wide">HELP</h4>
          <ul className="space-y-1">
            {data.help.map((item, idx) => (
              <li key={idx}><a href="#" className="hover:text-white transition-colors text-sm">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-bold text-lg mb-2 tracking-wide">CONTACT US</h4>
          <ul className="space-y-1 text-sm">
            <li><strong className="text-white">India:</strong> {data.contact.india}</li>
            <li><strong className="text-white">USA:</strong> {data.contact.usa}</li>
            <li><strong className="text-white">UK:</strong> {data.contact.uk}</li>
            <li className="pt-2"><strong className="text-white">Addresses:</strong><br />{data.contact.address}</li>
          </ul>
        </div>

        {/* Trust Badges */}
        <div>
          <h4 className="text-white text-lg mb-2 tracking-wide">WE GUARANTEE</h4>
          <div className="flex flex-col gap-1">
            {data.trust_badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 py-3 px-4 rounded-md border border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
                <span className=" text-yellow-100 tracking-wider text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs">
        <p>Copyright © 2025 Aarti Gems Mine - Designed and Developed By Reef Technologies.</p>
      </div>
    </footer>
  );
};

export default Footer;
