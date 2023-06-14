import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-8xl mx-auto py-4 bg-gray-100 text-white-800 flex flex-wrap justify-center">
      <div className="flex flex-col">
        <ul className="flex flex-wrap">
          <li className="px-4 py-2 text-gray-500">
            <a href="/about">About</a>
          </li>
          <li className="px-4 py-2 text-gray-500">
            <a href="/blog">Blog</a>
          </li>
          <li className="px-4 py-2 text-gray-500">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <p className="mb-4 mx-auto text-center  text-gray-500">© 2023 SHOPPE</p>
      </div>
    </footer>
  );
};

export default Footer;
