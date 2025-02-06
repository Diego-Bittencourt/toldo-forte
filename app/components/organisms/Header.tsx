"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = ["PROMAÇÃO","ENTREGA GRÁTIS"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage(prevMessage => (prevMessage + 1) % messages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <>
      <div className="">
        <div className="container mx-auto flex justify-end items-center space-x-2">
          <span>Telefone: 000 0000 000 </span>
          <a href="https://wa.me/351123456789" target="_blank" 
           rel="noopener noreferrer" className="flex items-center space-x-1
           ">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
      <header className=" text-black shadow-md py-0">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="logo.jpg" 
            alt="Logo da Empresa"
            className="h-14"
          />
          <nav className={`flex space-x-10 ${isOpen ? 'block' : 'hidden'} md:flex`} style={{ marginLeft: '28mm' }}>
            <a href="#" className="text-black-1000 hover:text-gray">Home</a>
            <a href="#" className="text-black-1000 hover:text-gray ">Nossa história</a>
            <a href="#" className="text-black-100 hover:text-gray">Produtos</a>
         </nav>
          <a
            href="/fazer-orcamento"
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-red-400 
            transform hover:-translate-y-1 hover:scale-110 transition duration-500"
          >
          Fazer Orçamento
                    </a>
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="div_100 text-center propostasValorWrapper p-1000">
          <div className="innerProposta">{messages[currentMessage]}</div>
        </div>
      </header>
    </>
  );
}
