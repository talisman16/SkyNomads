import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">SkyNomads</h2>
            <p className="text-gray-400">
              Copyright © 2023 SkyNomads. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="list-unstyled text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-200">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul className="list-unstyled text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-200">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
